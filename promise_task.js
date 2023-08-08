let pro = new Promise((resolve, reject) => {
    if (true) {
      // throw new Error("---ERRRRRR-->");
      setTimeout(() => {
        resolve({name: "nidhi"},{age:25},{city:"surat"}
        );
        }, 2000);
    } else {
      reject("----rejected----");
    }
  });
  
  pro
    .then((res) => {
      console.log("name :", res);
      return res;
    })
    .then((res1) => {
      console.log("age:",res1);
      return res1;
    })
    .then((res2) => {
      console.log("city:", res2);
    })
    .catch((err) => {
      console.log("not found", err);
    });

    let x = pro;
    console.log(x);
  
  