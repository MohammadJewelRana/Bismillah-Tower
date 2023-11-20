import React from "react";
import useCampaign from "../hooks/useCampaign";

export const grandTotal = () => {
  const [campaign, campaignLoading, campaignRefetch] = useCampaign();
  //   console.log(campaign);
  let totalAmountSum = 0;
  let perCampaignAmount = [];
  campaign.forEach((element) => {
    const arr = element.memberArray;
    // console.log(arr);
    const campaignID = element._id;
    // console.log(element._id);
    let perCampaign = 0;
    arr.forEach((element) => {
      if (element.paidAmount) {
        // console.log(element.paidAmount);
        perCampaign = perCampaign + parseFloat(element.paidAmount);
        totalAmountSum = totalAmountSum + parseFloat(element.paidAmount);
      }
      // console.log('per cam : ',perCampaign);
    });
    let campaignTotalAmount = {
      campaignID: campaignID,
      campaignPurpose: element.campaignPurpose,
      campaignTotal: perCampaign,
    };
    // console.log(campaignTotalAmount);
    perCampaignAmount.push(campaignTotalAmount);
  });

  return [totalAmountSum,perCampaignAmount];
};
