"use client";
import {
  Box,
  Card,
  CardContent,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import Header from "src/app/components/header";
import ReactCardFlip from "react-card-flip";
import PaidRoundedIcon from "@mui/icons-material/PaidRounded";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { styled } from "@mui/system";
import MortgageModal from "src/app/components/mortgageModal";

export default function Page({ params }) {
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

  const GradientButton = styled(Button)(({ theme }) => ({
    background: "linear-gradient(45deg, #F786EE, #767FFE) !important",
    color: "#fff",
    width: 156,
    height: 46,
    padding: "14px 32px 14px 32px",
    borderRadius: "14px",
    border: "none",
    zIndex: 9999,
    cursor: "pointer",
    fontSize: "16px",
    visibility: "visible",
    fontSize: "10px",
    marginTop: 10,
    transition: "visibility 0.3s ease",
    "&.hidden": {
      visibility: "hidden",
    },
  }));

  const newData = data.filter((x) => x.id == params.id);
  const { logo, name, floor, volume, listed, totalVolume, nft } =
    newData && newData[0];

  const [isFlip, setIsFlip] = useState();
  const [items, setItem] = useState();
  const [isModal, setIsModal] = useState(false);
  const handleModal = (item) => {
    setItem(item);
    setIsModal(!isModal);
  };
  return (
    <>
      <Header />
      <div style={{ marginLeft: 20, marginRight: 30, marginTop: 10 }}>
        <Box style={{ display: "flex" }}>
          <img src={logo} style={{ width: "268px", height: "272px" }} />
          <Box sx={{ marginLeft: 4, width: "100%", height: "272px" }}>
            <Typography variant="h4">{name.toLocaleUpperCase()}</Typography>

            <Box style={{ display: "flex" }}>
              <Box
                sx={{
                  width: "10%",
                  padding: 2,
                  background: "#232324",
                  borderRadius: 2,
                }}
              >
                <Typography sx={{ fontSize: "12px", color: "#5b5d61" }}>
                  Floor Price
                </Typography>
                <Box display={"flex"} alignItems={"center"}>
                  <img
                    src="/image/sui.png"
                    style={{
                      width: "15px",
                      height: "15px",
                      marginRight: "5px",
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: "bold",
                      color: "#f9f9f9",
                    }}
                  >
                    {floor}
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  width: "10%",
                  marginLeft: 2,
                  padding: 2,
                  background: "#232324",
                  borderRadius: 2,
                }}
              >
                <Typography sx={{ fontSize: "12px", color: "#5b5d61" }}>
                  Listed
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: "bold",
                    color: "#f9f9f9",
                  }}
                >
                  {listed}
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "10%",
                  marginLeft: 2,
                  padding: 2,
                  background: "#232324",
                  borderRadius: 2,
                }}
              >
                <Typography sx={{ fontSize: "12px", color: "#5b5d61" }}>
                  24h Volume
                </Typography>

                <Box display={"flex"} alignItems={"center"}>
                  <img
                    src="/image/sui.png"
                    style={{
                      width: "15px",
                      height: "15px",
                      marginRight: "5px",
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: "bold",
                      color: "#f9f9f9",
                    }}
                  >
                    {volume}
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  width: "10%",
                  marginLeft: 2,
                  padding: 2,
                  background: "#232324",
                  borderRadius: 2,
                }}
              >
                <Typography sx={{ fontSize: "12px", color: "#5b5d61" }}>
                  Total Volume
                </Typography>
                <Box display={"flex"} alignItems={"center"}>
                  <img
                    src="/image/sui.png"
                    style={{
                      width: "15px",
                      height: "15px",
                      marginRight: "5px",
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: "bold",
                      color: "#f9f9f9",
                    }}
                  >
                    {totalVolume}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ height: 1.1, marginTop: 5, background: "#232424" }} />
        <Typography style={{ marginTop: 2, color: "#767FFE" }} variant="h6">
          Items
        </Typography>
        <Box
          sx={{ height: 1.1, width: 50, marginTop: 1, background: "#767FFE" }}
        />

        <Box sx={{ height: 1.1, marginTop: 1, background: "#232424" }} />
        <Grid container spacing={2} sx={{ marginTop: 2, marginBottom: 5 }}>
          {nft.map((item, index) => {
            item.collection = name
            return (
              <Grid item xs={12} sm={6} md={5} lg={2} key={index}>
                <ReactCardFlip isFlipped={isFlip === index} infinite>
                  <div>
                    <Card
                      onClick={() => setIsFlip(index)}
                      sx={{
                        background: "#000",
                        width: "237px",
                        height: "353px",
                        border: "0.5px solid #fff",
                        "&:hover": {
                          border: "2px solid #fff",
                        },
                      }}
                    >
                      <CardContent>
                        <img src={item?.img} style={{ height: "200px" }} />
                        <Typography
                          sx={{ color: "#fff", marginTop: 2, fontSize: 15 }}
                        >
                          {item.name}
                        </Typography>
                        <Box
                          sx={{ background: "#fff", height: 1.5, margin: 1 }}
                        />
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Box>
                            <Typography sx={{ color: "#5b5d61", fontSize: 15 }}>
                              Price
                            </Typography>
                            <Box display={"flex"} alignItems={"center"}>
                              <img
                                src="/image/sui.png"
                                style={{
                                  width: "15px",
                                  height: "15px",
                                  marginRight: "5px",
                                }}
                              />
                              <Typography sx={{ color: "#fff", fontSize: 15 }}>
                                {item.price}
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>
                  </div>
                  <div>
                    <Card
                      onClick={() => setIsFlip()}
                      sx={{
                        background: "#000",
                        width: "237px",
                        height: "353px",
                        border: "0.5px solid #fff",
                        "&:hover": {
                          border: "2px solid #fff",
                        },
                      }}
                    >
                      <CardContent
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          height: "100%",
                        }}
                      >
                        <PaidRoundedIcon
                          style={{
                            fontSize: 80,
                            color: "#767FFE",
                          }}
                        />

                        <Typography
                          style={{ color: "#fff", fontSize: 13 }}
                          variant="h6"
                        >
                          Mortgage Instantly for
                        </Typography>
                        <Box display={"flex"} alignItems={"center"}>
                          <img
                            src="/image/sui.png"
                            style={{
                              width: "20px",
                              height: "18px",
                              marginRight: "5px",
                            }}
                          />
                          <Typography
                            variant="h6"
                            sx={{
                              color: "#fff",
                              fontSize: 24,
                              fontWeight: "bold",
                            }}
                          >
                            {item?.price}
                          </Typography>
                        </Box>
                        <GradientButton
                          onClick={() => {
                            handleModal(item);
                            setIsFlip(index);
                          }}
                        >
                          MORTGAGE
                        </GradientButton>
                      </CardContent>
                    </Card>
                  </div>
                </ReactCardFlip>
              </Grid>
            );
          })}
        </Grid>
        <MortgageModal item={items} handleModal={handleModal} open={isModal} />
      </div>
    </>
  );
}
