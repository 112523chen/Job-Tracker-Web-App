import React from "react";
import { removeApplication } from "../../../helper/api/functions";
import { DeleteButtonBase } from "./DeleteButton.style";

interface Props {
  id: number;
  fetchApplications: () => Promise<void>;
}

const DeleteButton: React.FC<Props> = ({ id, fetchApplications }) => {
  const handleClick = async () => {
    let response = await removeApplication(id);
    if (response == "Passed") {
      fetchApplications();
    } else {
      throw Error("Not successful");
    }
  };
  return (
    <DeleteButtonBase onClick={handleClick}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_98_142)">
          <path d="M33.3333 10C33.7581 10.0005 34.1667 10.1631 34.4756 10.4548C34.7845 10.7464 34.9704 11.1449 34.9953 11.569C35.0202 11.9931 34.8822 12.4106 34.6095 12.7364C34.3369 13.0622 33.9501 13.2715 33.5283 13.3217L33.3333 13.3333H33.1983L31.6667 31.6667C31.6667 32.942 31.1794 34.1692 30.3045 35.0971C29.4296 36.025 28.2331 36.5835 26.96 36.6583L26.6667 36.6667H13.3333C10.67 36.6667 8.49332 34.585 8.34665 32.0833L8.33832 31.805L6.79998 13.3333H6.66665C6.24185 13.3329 5.83326 13.1702 5.52437 12.8786C5.21548 12.587 5.02959 12.1884 5.0047 11.7644C4.9798 11.3403 5.11778 10.9227 5.39043 10.597C5.66308 10.2712 6.04982 10.0618 6.47165 10.0117L6.66665 10H33.3333ZM17.5183 18.5667C17.1691 18.3588 16.756 18.2857 16.3567 18.3611C15.9573 18.4364 15.5993 18.6551 15.3499 18.976C15.1005 19.2968 14.9769 19.6978 15.0024 20.1033C15.0279 20.5089 15.2007 20.8912 15.4883 21.1783L17.6417 23.3333L15.4883 25.4883L15.35 25.645C15.091 25.98 14.9692 26.401 15.0093 26.8226C15.0495 27.2441 15.2486 27.6345 15.5662 27.9146C15.8838 28.1947 16.2961 28.3433 16.7193 28.3304C17.1426 28.3175 17.5451 28.1439 17.845 27.845L20 25.6917L22.155 27.845L22.3117 27.9833C22.6466 28.2424 23.0677 28.3642 23.4892 28.324C23.9107 28.2839 24.3012 28.0847 24.5812 27.7671C24.8613 27.4495 25.01 27.0372 24.997 26.614C24.9841 26.1907 24.8106 25.7883 24.5117 25.4883L22.3583 23.3333L24.5117 21.1783L24.65 21.0217C24.909 20.6867 25.0308 20.2657 24.9907 19.8441C24.9505 19.4226 24.7514 19.0321 24.4338 18.7521C24.1162 18.472 23.7039 18.3234 23.2806 18.3363C22.8574 18.3492 22.4549 18.5228 22.155 18.8217L20 20.975L17.845 18.8217L17.6883 18.6833L17.5183 18.5667ZM23.3333 3.33334C24.2174 3.33334 25.0652 3.68453 25.6903 4.30965C26.3155 4.93478 26.6667 5.78262 26.6667 6.66668C26.6662 7.09148 26.5035 7.50006 26.2119 7.80896C25.9203 8.11785 25.5217 8.30373 25.0977 8.32863C24.6736 8.35353 24.256 8.21555 23.9303 7.9429C23.6045 7.67025 23.3952 7.2835 23.345 6.86168L23.3333 6.66668H16.6667L16.655 6.86168C16.6048 7.2835 16.3955 7.67025 16.0697 7.9429C15.744 8.21555 15.3264 8.35353 14.9023 8.32863C14.4782 8.30373 14.0797 8.11785 13.7881 7.80896C13.4965 7.50006 13.3338 7.09148 13.3333 6.66668C13.3331 5.82572 13.6507 5.01573 14.2225 4.3991C14.7943 3.78246 15.5781 3.40475 16.4167 3.34168L16.6667 3.33334H23.3333Z" />
        </g>
        <defs>
          <clipPath id="clip0_98_142">
            <rect width="40" height="40" />
          </clipPath>
        </defs>
      </svg>
    </DeleteButtonBase>
  );
};

export default DeleteButton;