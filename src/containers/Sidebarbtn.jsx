const SidebarBtn = ({img ,title}) => {
  return (
    <button className="btn sidebar-btn">
      <span className="img">{img}</span>
     <span className="sidebar_btn-title">{title}</span>
    </button>
  );
};

export default SidebarBtn;
