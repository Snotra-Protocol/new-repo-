import React from "react";
const data = [
  {
    id: 1,
    logo: "https://storage.googleapis.com/clutchy-f128b.appspot.com/images%2Frn0zzhram%2Fun4tmt6h7-1200.webp",
    name: "Sips",
    floor: 4.44,
    volume: 3.29,
    listed: "347/5 555",
    totalVolume: 23.63,
    nft: [
      {
        name: "#2398",
        price: 4.44,
        img: "https://shdw-drive.genesysgo.net/A8kprUB4GJBU3WohSQZuR3Jips2aEVVNXGWkmrgTJbsa/2398.png",
      },
      {
        name: "#2429",
        price: 4.44,
        img: "https://shdw-drive.genesysgo.net/A8kprUB4GJBU3WohSQZuR3Jips2aEVVNXGWkmrgTJbsa/2429.png",
      },
      {
        name: "#4948",
        price: 4.44,
        img: "https://shdw-drive.genesysgo.net/A8kprUB4GJBU3WohSQZuR3Jips2aEVVNXGWkmrgTJbsa/4948.png",
      },
      {
        name: "#4744",
        price: 4.44,
        img: "https://shdw-drive.genesysgo.net/A8kprUB4GJBU3WohSQZuR3Jips2aEVVNXGWkmrgTJbsa/4744.png",
      },
    ],
  },
  {
    id: 2,
    logo: "https://storage.googleapis.com/clutchy-f128b.appspot.com/images%2Fy25d1z32u%2F4cl2ps8vxf-1200.webp",
    name: "Stork",
    floor: 25.0,
    volume: 168.79,
    listed: "408/4 500",
    totalVolume: 20.13,
    nft: [
      {
        name: "#3771",
        price: 25.0,
        img: "https://cdn.clutchy.io/ipfs/bafybeidfs54ioohyumcli2tu4vbueczsf2guxy3zilevxmj3lvg42d5mry?img-quality=60&img-width=400&img-height=400",
      },
      {
        name: "#820",
        price: 25.0,
        img: "https://cdn.clutchy.io/ipfs/bafybeiaunylu3r7fwvaehenbyd7tfn73ne65th4huujuhguaewcvx3bf6a?img-quality=60&img-width=400&img-height=400",
      },
      {
        name: "#4071",
        price: 25.0,
        img: "https://cdn.clutchy.io/ipfs/bafybeifvo4nirlxyuqy7rslat2jzlc4rq724bhspyqugtusohr5m5oyjcq?img-quality=60&img-width=400&img-height=400",
      },
      {
        name: "#4462",
        price: 25.0,
        img: "https://cdn.clutchy.io/ipfs/bafybeialq27wlv7bmgicbpj5cvq2qk4vvgfjetkr6nfjblamhwbysaykpy?img-quality=60&img-width=400&img-height=400",
      },
    ],
  },
  {
    id: 3,
    logo: "https://storage.googleapis.com/clutchy-f128b.appspot.com/images%2F16p8wip1j%2Fyyitz067ij-1200.webp",
    name: "AHOY",
    floor: 18.88,
    volume: 268.82,
    listed: "11/3 000",
    totalVolume: 17.64,
    nft: [
      {
        name: "#206",
        price: 18.88,
        img: "https://shdw-drive.genesysgo.net/3k7dzUPF56a41zSWfd1nYpTqjCex6LJxxoBaYgc7H55b/206.png",
      },
      {
        name: "#3036",
        price: 18.88,
        img: "https://shdw-drive.genesysgo.net/3k7dzUPF56a41zSWfd1nYpTqjCex6LJxxoBaYgc7H55b/3036.png",
      },
      {
        name: "#3310",
        price: 18.88,
        img: "https://shdw-drive.genesysgo.net/3k7dzUPF56a41zSWfd1nYpTqjCex6LJxxoBaYgc7H55b/3310.png",
      },
      {
        name: "#3534",
        price: 18.88,
        img: "https://shdw-drive.genesysgo.net/3k7dzUPF56a41zSWfd1nYpTqjCex6LJxxoBaYgc7H55b/3534.png",
      },
    ],
  },
];
const DetailPage = ({ id }) => {
  const newData = data.filter((x) => x.id == id);
  return (
    <div>
      <h1>hey {newData[0]?.name}</h1>
    </div>
  );
};
export default DetailPage;
