// pages/login.js
"use client";
import { useState } from "react";
import { LinearProgress, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import HeaderBand from "@/components/header-band";
import Wrapper from "@/components/wrapper";
import PrimaryBtn from "@/components/buttons/primary";
import img from "../../../public/assets/images/tick-animation-blue-success-feedback-plX7vWp4dQ.png";
import Image from "next/image";
import { getInputText, typeOfData } from "@/utils/common-function";
const steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];

const BusinessProfile = () => {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(0);
  const [data, setData] = useState({
    name: "",
    dob: "",
    email: "",
    companyName: "",
    ownerName: "",
    bussType: "",
    turnover: "",
    address: "",
    city: "",
    pincode: "",
    state: "",
    bussUrl: "",
    gst: "",
    gBussurl: "",
    yearOfEst: "",
    empyNo: "",
    website: "",
    bankAccName: "",
    acctNo: "",
    accType: "",
    branch: "",
    ifscCode: "",
    pan: "",
    countyrLogo: "",
    businessProffDocument: "",
  });
  const handleNext = () => {
    const bool = getFilled(activeStep);
    if (!bool) {
      alert("Please fill all details");
      return;
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
  };
  const handleSubmit = () => {
    router.push("/success");
  };
  const progressPercentage = Math.floor((activeStep / steps.length) * 100);
  const handleChange = (payload: any) => {
    setData({ ...data, ...payload });
  };
  const getFilled = (id: number) => {
    return true;

    switch (id) {
      case 0:
        return true;
      // data.name.length > 0 && data.dob.length > 0 && data.email.length > 0
      case 1:
        return (
          // data.companyName.length > 0 &&
          // data.ownerName.length > 0 &&
          // data.turnover.length > 0 &&
          // data.bussType.length > 0
          true
        );
      case 2:
        return true;

      case 3:
        return true;

      case 5:
        return true;
    }
  };
  const getForm = (id: number) => {
    switch (id) {
      case 0:
        return <Step1Form data={data} handleChange={handleChange} />;
      case 1:
        return <Step2Form data={data} handleChange={handleChange} />;
      case 2:
        return <Step3Form data={data} handleChange={handleChange} />;
      case 3:
        return <Step4Form data={data} handleChange={handleChange} />;
      case 4:
        return <Step5Form data={data} handleChange={handleChange} />;
      case steps.length:
        return (
          <div className="flex flex-col justify-center items-center w-full h-full">
            <Image
              data-aos="fade-left"
              data-aos-duration="1000"
              src={img}
              alt=""
              className="h-30 w-30"
            />
            <h3 className="text-[50px] max-md:text-xl font-bold text-[#0044BB]">
              Thank You
            </h3>
            <p
              data-aos="fade-left"
              data-aos-duration="1000"
              className="text-md text-[#999999] py-5"
            >
              Thank you for submitting sellers profile will get in touch
              with you shortly
            </p>
            <PrimaryBtn
              handleClick={() => {
                router.push("/");
              }}
              title="Explore more"
            ></PrimaryBtn>
          </div>
        );
    }
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <HeaderBand
        title={activeStep < 2 ? "Profile" : "Bussiness Profile"}
      ></HeaderBand>
      <Wrapper>
        <div className="flex justify-center items-center mt-20 mb-20">
          <div className=" flex-col w-[80%] max-md:w-full h-auto max-md:h-auto max-lg:mt-20   mt-20 mb-20 max-md:mt-10 flex justify-center items-start">
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              className="w-full flex flex-col justify-end items-end"
            >
              <p className="text-md text-[#D9D9D9] font-bold">
                {progressPercentage}%
              </p>
              <LinearProgress
                sx={{
                  backgroundColor: "#D9D9D9",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "#0044BB",
                  },
                }}
                variant="determinate"
                value={progressPercentage}
                // color="#D9D9D9"
                className="w-full mb-4 "
              />
            </div>
            <h2
              data-aos="fade-right"
              data-aos-duration="1000"
              className="text-xl max-md:text-lg text-black wider uppercase font-[600]"
            >
              Setup your <span className="text-[#0044BB]"> seller profile</span>
            </h2>
            <h2
              data-aos="fade-left"
              data-aos-duration="1000"
              className="text-lg mt-5 max-md:text-md mb-5 max-md:mb-5 font-[600] uppercase text-[#9c9b9b]"
            >
              Basic Details
            </h2>
            <div
              data-aos="flip-up"
              data-aos-duration="1000"
              className="w-full p-8 my-5 max-md:pt-5 px-10 min-h-[50vh]  flex justify-start items-start rounded-xl border-2 border-[#DDDDDD] bg-[#FAFAFA]"
            >
              {getForm(activeStep)}
            </div>
            {activeStep !== steps.length && (
              <div className="flex item-center justify-between mt-4 w-full px-10 max-md;mt-2 max-md:px-2 max-lg:px-3">
                <PrimaryBtn
                  handleClick={handleBack}
                  title="  Previous  "
                  disable={activeStep === 0}
                ></PrimaryBtn>
                <PrimaryBtn
                  handleClick={handleNext}
                  title={
                    activeStep === steps.length - 1 ? "  Submit  " : "  Next  "
                  }
                ></PrimaryBtn>
              </div>
            )}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

const Step1Form = ({
  data,
  handleChange,
}: {
  data: any;
  handleChange: (val: any) => void;
}) => {
  const nameInput = getInputText({
    id: typeOfData.text,
    label: "Name",
    placeholder: "Name",
    val: data.name,
    handleChange: (event: any) => {
      handleChange({ name: event.target.value });
    },
  });
  const mailInput = getInputText({
    id: typeOfData.email,
    label: "Email",
    placeholder: "Email",
    val: data.email,
    handleChange: (event: any) => {
      handleChange({ email: event.target.value });
    },
  });
  const dobInput = getInputText({
    id: typeOfData.dob,
    val: data.dob,
    label: "Date of birth",
    placeholder: "DD/MM/YYYY",
    handleChange: (event: any) => {
      handleChange({ dob: event.target.value });
    },
  });
  return (
    <div className=" h-full w-full grid max-md:grid-cols-1 max-md:gap-x-0 max-md:gap-y-5 gap-y-5 gap-x-10 grid-cols-2">
      {nameInput && nameInput({})}
      {dobInput && dobInput({})}
      {mailInput && mailInput({})}
    </div>
  );
};

const Step2Form = ({
  data,
  handleChange,
}: {
  data: any;
  handleChange: (val: any) => void;
}) => {
  const field1 = getInputText({
    id: typeOfData.text,
    label: "Company Name",
    placeholder: "Number",
    val: data.companyName,
    handleChange: (event: any) => {
      handleChange({ companyName: event.target.value });
    },
  });
  const field2 = getInputText({
    id: typeOfData.text,
    label: "Owner Name",
    placeholder: "Branch",
    val: data.ownerName,
    handleChange: (event: any) => {
      handleChange({ ownerName: event.target.value });
    },
  });
  const field3 = getInputText({
    id: typeOfData.text,
    label: "Annual Turnover",
    placeholder: "Number",
    val: data.turnover,
    handleChange: (event: any) => {
      handleChange({ turnover: event.target.value });
    },
  });
  const field4 = getInputText({
    id: typeOfData.select,
    label: "Type of Business",
    placeholder: "Select",
    val: data.bussType,
    menuList: [
      "Properitary",
      "Limited Liability Partnership",
      "Public Limited Group",
      "PUT",
    ],
    handleChange: (event: any) => {
      handleChange({ bussType: event.target.value });
    },
  });

  const addressInput = getInputText({
    id: typeOfData.text,
    label: "",
    placeholder: "Address (area and Street)",
    val: data.address,
    handleChange: (event: any) => {
      handleChange({ address: event.target.value });
    },
  });
  const city = getInputText({
    id: typeOfData.text,
    label: "",
    placeholder: "City /Town",
    val: data.city,
    handleChange: (event: any) => {
      handleChange({ city: event.target.value });
    },
  });
  const state = getInputText({
    id: typeOfData.select,
    label: "Select ",
    placeholder: "State",
    val: data.state,
    menuList: ["MP", "Maharastra", "Tamil Nadu"],
    handleChange: (event: any) => {
      handleChange({ state: event.target.value });
    },
  });
  const pin = getInputText({
    id: typeOfData.text,
    label: "",
    placeholder: "Pincode",
    val: data.pincode,
    handleChange: (event: any) => {
      handleChange({ pincode: event.target.value });
    },
  });
  return (
    <div className=" h-full w-full grid max-md:grid-cols-1 max-md:gap-x-0 max-md:gap-y-5 gap-y-5 gap-x-10 grid-cols-2">
      {field1 && field1({})}
      {field4 && field4({})}
      {field2 && field2({})}
      <div className="grid grid-cols-1 gap-y-2 ">
        <h2 className="text-[#787878]">Company Adress</h2>
        {addressInput && addressInput({})}
        <div className="grid grid-cols-2 gap-y-2 gap-x-2 max-md:grid-cols-1 max-lg:grid-cols-1 max-md:gap-y-5">
          {city && city({})}
          {state && state({})}
          {pin && pin({})}
        </div>
      </div>
      {field3 && field3({})}
    </div>
  );
};
const Step3Form = ({
  data,
  handleChange,
}: {
  data: any;
  handleChange: (val: any) => void;
}) => {
  const field1 = getInputText({
    id: typeOfData.text,
    label: "India Mart Business URL",
    placeholder: "Link",
    val: data.bussUrl,
    handleChange: (event: any) => {
      handleChange({ bussUrl: event.target.value });
    },
  });
  const field2 = getInputText({
    id: typeOfData.text,
    label: "GST Number",
    placeholder: "GST Number",
    val: data.gst,
    handleChange: (event: any) => {
      handleChange({ gst: event.target.value });
    },
  });
  const field6 = getInputText({
    id: typeOfData.text,
    label: "Website",
    placeholder: "Link",
    val: data.website,
    handleChange: (event: any) => {
      handleChange({ website: event.target.value });
    },
  });

  const field3 = getInputText({
    id: typeOfData.text,
    val: data.gBussurl,
    label: "Google Business URL",
    placeholder: "Google Business URL",
    handleChange: (event: any) => {
      handleChange({ gBussurl: event.target.value });
    },
  });
  const field4 = getInputText({
    id: typeOfData.number,
    val: data.empyNo,
    label: "No. Of Employees",
    placeholder: "No. Of Employees",
    handleChange: (event: any) => {
      handleChange({ empyNo: event.target.value });
    },
  });
  const field5 = getInputText({
    id: typeOfData.number,
    val: data.yearOfEst,
    label: "Year Of Establish",
    placeholder: "Year Of Establish",
    handleChange: (event: any) => {
      handleChange({ yearOfEst: event.target.value });
    },
  });
  return (
    <div className=" h-full w-full grid max-md:grid-cols-1 max-md:gap-x-0 max-md:gap-y-5 gap-y-10 gap-x-10 grid-cols-2">
      {field1 && field1({})}
      {field2 && field2({})}
      {field3 && field3({})}
      {field4 && field4({})}
      {field6 && field6({})}
      {field5 && field5({})}
    </div>
  );
};
const Step4Form = ({
  data,
  handleChange,
}: {
  data: any;
  handleChange: (val: any) => void;
}) => {
  const field1 = getInputText({
    id: typeOfData.text,
    label: "Bank Account Name",
    placeholder: "Name",
    val: data.bankAccName,
    handleChange: (event: any) => {
      handleChange({ bankAccName: event.target.value });
    },
  });
  const field2 = getInputText({
    id: typeOfData.text,
    label: "Bank Account No",
    placeholder: "Bank Account No",
    val: data.acctNo,
    handleChange: (event: any) => {
      handleChange({ acctNo: event.target.value });
    },
  });
  const field6 = getInputText({
    id: typeOfData.select,
    label: "Bank Acc Type",
    placeholder: "Bank Acc Type",
    val: data.accType,
    menuList: ["Saving", "Current Account"],
    handleChange: (event: any) => {
      handleChange({ accType: event.target.value });
    },
  });

  const field3 = getInputText({
    id: typeOfData.text,
    val: data.ifscCode,
    label: "Bank IFSC Code",
    placeholder: "Bank IFSC Code",
    handleChange: (event: any) => {
      handleChange({ ifscCode: event.target.value });
    },
  });
  const field4 = getInputText({
    id: typeOfData.text,
    val: data.branch,
    label: "Bank Branch",
    placeholder: "Bank Branch",
    handleChange: (event: any) => {
      handleChange({ branch: event.target.value });
    },
  });

  return (
    <div className=" h-full w-full grid max-md:grid-cols-1 max-md:gap-x-0 max-md:gap-y-5 gap-y-10 gap-x-10 grid-cols-2">
    {field1 &&
        field1({
        })}
      {field2 &&
        field2({
        })}
      {field6 &&
        field6({
        })}

      {field3 &&
        field3({
        })}
      {field4 &&
        field4({
        })}
    </div>
  );
};

const Step5Form = ({
  data,
  handleChange,
}: {
  data: any;
  handleChange: (val: any) => void;
}) => {
  const field1 = getInputText({
    id: typeOfData.file,
    label: "Country Logo",
    placeholder: "Choose File",
    val: data.countyrLogo,
    handleChange: (event: any) => {
      handleChange({ countyrLogo: event.target.value });
    },
  });
  const field2 = getInputText({
    id: typeOfData.file,
    label: "PAN",
    placeholder: "Choose File",
    val: data.pan,
    handleChange: (event: any) => {
      handleChange({ pan: event.target.value });
    },
  });

  const field3 = getInputText({
    id: typeOfData.file,
    val: data.businessProffDocument,
    label: "business Proof Document",
    placeholder: "Choose File",
    handleChange: (event: any) => {
      handleChange({ businessProffDocument: event.target.value });
    },
  });

  return (
    <div className="flex flex-col  w-full justify-start items-start max-md:flex-col ">
      {field1 &&
        field1({
          className: "w-full max-md:w-full  mr-5 max-md:mr-0 mb-6  ",
        })}
      {field2 &&
        field2({
          className: "w-full max-md:w-full  mr-5 max-md:mr-0 mb-6   ",
        })}
      {field3 &&
        field3({
          className: "w-full max-md:w-full  mr-5 max-md:mr-0 mb-6   ",
        })}
    </div>
  );
};

const Step6Form = () => {
  // Implement your form logic for step 3
  return <Typography>Thank you</Typography>;
};
export default BusinessProfile;
