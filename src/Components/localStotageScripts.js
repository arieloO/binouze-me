// const localState = localStorage.getItem("studioAppState");
//     if (localState === null) {
//       this.state = defaultState;
//     } else {
//       this.state = JSON.parse(localState);
//     }

//     if (window.screen.width > 1080) {
//       this.state.mobileDisplay = false;
//       this.state.currentView = 1;
//     } else {
//       console.log("DESKTOP Definetly");
//     }
//   }

// JSON.stringify JSON.parse
saveToLocal = () => {
  localStorage.setItem("studioAppState", JSON.stringify(this.state));
};

setStateAndSaveToLocal = (neoState) => {
  console.log(neoState, "SET AND SAVE");
  this.setState(neoState, this.saveToLocal);
};

getStateFromLocalStorage = () => {
  console.log("GETTING PREVIOUS STATE FROM LOCAL STORAGE");
  const localState = JSON.parse(localStorage.getItem("studioAppState"));
  if (this.state === localState) {
    console.log("STOP IT ");
  } else {
    console.log(this.state, localState, "KEEP GOING");
  }
};
