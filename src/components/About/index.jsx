import { Grid, Typography } from "@mui/material";
import RoundedButton from "../Button";
import AboutImg from "../../assets/about.avif";

export const About = () => {
  return (
    <div style={{ marginTop: '5rem' }} >
      <Grid container spacing={2}>
        <Grid item xs={4} >
          <Typography fontSize={"1rem"}>ABOUT CONSENSYS</Typography>
          <Typography fontSize={"1.5rem"} style={{ marginTop: '2rem' }} >
            The drive to build is in all of us; the determination to make things
            better.
          </Typography>
          <RoundedButton
            label="Read more"
            onClick={() => console.log("click")}
          />
        </Grid>
        <Grid item xs={6}  >
          <Typography style={{ marginTop: '2rem' }} >
            Consensys is the leading blockchain and web3 software company. Since
            2014, Consensys has been at the forefront of innovation, pioneering
            technological developments within the web3 ecosystem. Through our
            product suite, including the MetaMask platform, Infura, Linea,
            Diligence, and our NFT platform, we have become a trusted
            collaborator for users, creators, and developers. Whether building a
            dapp, an NFT collection, a portfolio, or a better future, the
            instinct to build is universal. Our mission is to inspire and
            empower the builder in everyone by making web3 universally easy to
            use and develop on. Let’s build the world we want to see.
          </Typography>
        </Grid>
        {/* <Grid item xs={4}>
        <h1>xs=4</h1>
      </Grid>
      <Grid item xs={8}>
        <h1>xs=8</h1>
      </Grid> */}
      </Grid>
      <img src={AboutImg} style={{ width: '90%', margin: 'auto', display: 'flex', marginTop: '2rem' }} />
    </div>
  );
};
