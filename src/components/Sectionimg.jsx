const Today = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="2"
      viewBox="0 0 18 2"
      fill="none"
    >
      <path
        d="M1 1H17"
        stroke="#3751FF"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};
const Yertsaday = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="2"
      viewBox="0 0 18 2"
      fill="none"
    >
      <path
        d="M1 1H17"
        stroke="#DFE0EB"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};
const Inactive = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <rect width="24" height="24" rx="8" fill="#F0F1F7" />
      <path
        d="M12 7V17"
        stroke="#9FA2B4"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M17 12L7 12"
        stroke="#9FA2B4"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};
export { Today, Yertsaday,Inactive };
