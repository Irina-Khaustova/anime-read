import Header from "./Header";

function HeaderModel() {

  const openNavMenu = () => {

  }

  const closeNavMenu = () => {

  }

    return (
      <>
      <Header handleOpenNavMenu={openNavMenu} handleCloseNavMenu={closeNavMenu}></Header>
        </>
    );
  }
  
  export default HeaderModel;