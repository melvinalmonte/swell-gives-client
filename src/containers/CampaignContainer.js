import React from "react";
import axios from "axios";
import { Campaign } from "../components/campaign";
import { Cards } from "../components/cards";

const CampaignContainer = () => {
  const [campaign, setCampaign] = React.useState([]);

  React.useEffect(() => {
    console.log("PROCESS URL: ", process.env.REACT_APP_API_URL);
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/v1/campaign_highlight`)
      .then(response => setCampaign(response.data))
      .catch(e => console.log(e));
  }, []);

  return (
    <Campaign>
      {campaign.map(item => (
        <div className="column">
          <Cards
            recipient={item.recipient}
            location={item.location}
            itemRequested={item.item_requested}
            itemAmount={item.item_amount}
            amountFulfilled={item.amount_fulfilled}
            amountPercentage={(item.amount_fulfilled / item.item_amount) * 100}
            image_link={item.image_link}
          />
        </div>
      ))}
    </Campaign>
  );
};

export default CampaignContainer;
