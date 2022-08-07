import axios from "axios";

const token = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZTdiNTk3Yjk3YjBlNGE5MzBhZDZhNDllNWQ0YTNhOTZlZTQxNjcwZGI1MmJkZThhZjA0YjhhNTRjNDcyY2EyNjc1Yzk5ZmM4ZjRhOWQ3ZGUiLCJpYXQiOjE2NDk3NDE3NDEsIm5iZiI6MTY0OTc0MTc0MSwiZXhwIjoxNjgxMjc3NzQxLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.Uhi8LjWCN4CSgSGMJlELZfUteX5BDUpjBeTWb1DyLinxFoZH1Ce_Lyi9cm1IMdMFxdF87clomnoBRK05c-AkGRbogyxmQEdDdi-HnDhRwsOzOxK1elvjQRBfLcQfMkA29t1LBbE_yItbG0A3oJEc53wXmIyjAfGWd96RQkRNaeBkSNG-ucvdMFr0fTRcJY6NJ17CYy4xwsIOYMl0CMcaWzcpohanZ1Gtr5zW4V6TzpnuwHPlDGIZdNZFIAkqqOuhP0vJqGr9wNPgbzDs1rYu0nBsDCz4X3qncj68-eyRCtbIR5so4HUYSimbeKGo1TGm93QDiCMbB9w9IL70ZTpU5liyl4j8_pc2mFvm_8V49vVqdbiPgXLITE6TY84S_NcVk2MNbueDH5vn8-zpbbtguQbpSrNyPlzOT8lYNDByxZIdKOLKtApAOB9zeWJf4LLVY1O3epkYIDmPMDsTtIlo2mZ0tOui55fdgFYSUVUkWrHBYBtCPiFKRdnG7GuxEEyhjTInk-Dzqfx--eOrFRrO4OnBrjx9m11MF-YaOFaT6C6wkVK51Y3Tzwx_dyLQ2Wf7AyxkFLgSLsmnrtwrogC95HzcVjk8ZwwbsCae4WtX4Do8D6GRhPxwmW0d9oNgFyVLnrgIR_ufD4cXgPg_zuZnFeZRIKpUwPKda2ujXPTLsNU`;
localStorage.setItem("rowDatanew", token);
const newdata = localStorage.getItem("rowDatanew");

const config = {
  headers: {
    Authorization: `${newdata}`,
  },
};

export const APIServices = {
  postCmsData(url: string, data: any) {
    return axios.post(url, data, config);
  },

  getUserData(url: string) {
    return axios.get(url, config);
  },

};
