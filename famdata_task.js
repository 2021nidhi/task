let familyData = {
    name: "Jamalbhai",
    age: 83,
    child: [
      {
        name : "Dineshbhai",
        age : 58,
        occupation : "civil_engineer",
        vehicalDetails: [
            {
                name: "swift",
                no : "gj05-jp-3308"
            },
            {
                name: "verna",
                no: "gj05-hs-2793"
            }
        ],
        child: [
            {
                name: "himanshu",
                age: 29
            },
            {
                name:"shreya",
                age:26
            }
        ]
      },
      {
        name : "Nareshbhai",
        age : 56,
        occupation : "assistant sub inspector",
        vehicalDetails: [
            {
                name: "swift desire",
                no : "gj05-rc-3308"
            },
            {
                name: "activa",
                no: "gj05-kp-3308"
            }
        ],
        child: [
            {
                name: "divya",
                age: 27
            },
            {
                name:"nidhi",
                age:25
            }
        ]
      },
      {
        name : "Sureshbhai",
        age : 54,
        occupation : "health department",
        vehicalDetails: [
            {
                name: "aulto",
                no : "gj05-bp-3308"
            },
            {
                name: "activa",
                no: "gj05-rj-3308"
            }
        ],
        child: [
            {
                name: "krupa",
                age: 25
            },
            {
                name:"rudra",
                age: 16
            }
        ]
      },
    ]
}
  /*
  1. gradfather name
  2. grandfathers 2nd son's name
  3. grandfathers 1st sons -> 1st child name
  4. grandfathers 3rd sons -> 1st vehical details
  */
console.log("heaad's name:", familyData.name);
console.log("jamalbhai's 2nd son:", familyData.child[1].name);
console.log("dineshbhai's 1st child:", familyData.child[0].child[0].name);
console.log("sureshbhai's 1st vehicle:", familyData.child[2].vehicalDetails[0]);