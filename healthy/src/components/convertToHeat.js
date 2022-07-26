const convertToHeat = (input) => {
  let location = input[0];
  let severity = input[1];
  let heat = [];

  // head, neck, stomach, left arm, right arm, left leg, right leg, full
  switch (location) {
    case "head":
      for (let i = 0; i < 30; i++) {
        heat.push(severity);
      }
      break;
    case "neck":
      for (let i = 0; i < 30; i++) {
        heat.push(0);
      }
      for (let i = 0; i < 10; i++) {
        heat.push(severity);
      }
      break;
    case "left arm":
      for (let i = 0; i < 40; i++) {
        heat.push(0);
      }
      for (let i = 0; i < 28; i++) {
        heat.push(severity);
      }
      break;
    case "right arm":
      for (let i = 0; i < 68; i++) {
        heat.push(0);
      }
      for (let i = 0; i < 28; i++) {
        heat.push(severity);
      }
      break;
    case "stomach":
      for (let i = 0; i < 96; i++) {
        heat.push(0);
      }
      for (let i = 0; i < 88; i++) {
        heat.push(severity);
      }
      break;
    case "left leg":
      for (let i = 0; i < 184; i++) {
        heat.push(0);
      }
      for (let i = 0; i < 48; i++) {
        heat.push(severity);
      }
      break;
    case "right leg":
      for (let i = 0; i < 232; i++) {
        heat.push(0);
      }
      for (let i = 0; i < 48; i++) {
        heat.push(severity);
      }
      break;
    default:
      for (let i = 0; i < 280; i++) {
        heat.push(severity);
      }
      break;
  }
  return heat;
};

export default convertToHeat;
