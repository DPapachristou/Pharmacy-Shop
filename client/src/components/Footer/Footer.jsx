import styled from "styled-components";
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';


const Container = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  background-color: rgb(53, 55, 75);
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  padding: 10px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Pharmacy</Logo>
        <Desc>
          At our pharmacy, we offer a wide range of health and wellness products, 
          from prescription medications to vitamins and skincare. Our team is dedicated to providing personalized care and guidance for all your health needs.
        </Desc>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem onClick={() => window.location.href = "/"}>Home</ListItem>
          <ListItem onClick={() => window.location.href = "/cart"}>Cart</ListItem>
          <ListItem onClick={() => window.location.href = "/login"}>Login</ListItem>
          <ListItem onClick={() => window.open("https://www.google.com/search?q=search+order&sca_esv=65f37c3695602bce&sxsrf=AE3TifNhRYeFaIrI4sYhsbiLKBp7MVQqew%3A1756754890587&ei=yvO1aNvNI-Pni-gP2IyCiAo&ved=0ahUKEwjb2tf5pbiPAxXj8wIHHViGAKEQ4dUDCBE&uact=5&oq=search+order&gs_lp=Egxnd3Mtd2l6LXNlcnAiDHNlYXJjaCBvcmRlcjIIEAAYgAQYywEyCBAAGIAEGMsBMggQABiABBjLATIIEAAYgAQYywEyCBAAGIAEGMsBMggQABiABBjLATIIEAAYgAQYywEyCBAAGIAEGMsBMggQABiABBjLATIIEAAYgAQYywFIrztQpiVY5jpwDngAkAEAmAFaoAFaqgEBMbgBA8gBAPgBAZgCDqACJMICChAAGLADGNYEGEfCAg0QABiABBiwAxhDGIoFwgIKECMYgAQYJxiKBcICDhAuGIAEGLEDGNEDGMcBwgILEAAYgAQYsQMYgwHCAggQABiABBixA8ICDhAuGIAEGLEDGIMBGIoFwgIREC4YgAQYsQMY0QMYgwEYxwHCAhAQLhiABBixAxhDGIMBGIoFwgIQEC4YgAQY0QMYQxjHARiKBcICChAAGIAEGEMYigXCAgoQLhiABBhDGIoFwgIOEAAYgAQYsQMYgwEYigXCAhAQABiABBixAxhDGIMBGIoFwgITEC4YgAQYsQMY0QMYQxjHARiKBcICBRAAGIAEwgIFEC4YgATCAgoQABiABBgKGMsBmAMAiAYBkAYKkgcCMTSgB_gFsgcAuAcAwgcEMC4xNMgHIA&sclient=gws-wiz-serp")}>Order Tracking</ListItem>
          <ListItem onClick={() => window.open.href = "https://www.google.com/search?q=wishlist&sca_esv=65f37c3695602bce&sxsrf=AE3TifPnX_KRya7ndOlTGKSAYOVE8cj49w%3A1756754908390&ei=3PO1aMPIF9uyi-gPuryCmAE&ved=0ahUKEwjDppaCpriPAxVb2QIHHTqeABMQ4dUDCBE&uact=5&oq=wishlist&gs_lp=Egxnd3Mtd2l6LXNlcnAiCHdpc2hsaXN0MgUQABiABDIIEAAYgAQYywEyBRAAGIAEMgUQABiABDIFEAAYgAQyCBAAGIAEGMsBMggQABiABBjLATIIEAAYgAQYywEyBRAAGIAEMgUQLhiABEjXDFAAWLwKcAB4AZABAJgBrQGgAcYIqgEDMC44uAEDyAEA-AEBmAIIoALoCMICChAjGIAEGCcYigXCAgwQIxiABBgTGCcYigXCAgsQABiABBixAxiDAcICERAuGIAEGLEDGNEDGIMBGMcBwgIIEAAYgAQYsQPCAgoQABiABBhDGIoFwgILEC4YgAQYsQMYgwHCAgoQLhiABBhDGIoFwgIgEC4YgAQYsQMY0QMYgwEYxwEYlwUY3AQY3gQY4ATYAQHCAg0QABiABBixAxhDGIoFwgILEC4YgAQYxwEYrwGYAwC6BgYIARABGBSSBwMwLjigB7JfsgcDMC44uAfoCMIHBTAuNC40yAce&sclient=gws-wiz-serp"}>Wishlist</ListItem>
          <ListItem onClick={() => window.open.href = "https://www.google.com/search?q=terms&sca_esv=65f37c3695602bce&sxsrf=AE3TifM_jdy8VQbCVGj9qVNEJJd9xF3w2g%3A1756754958741&ei=DvS1aJyCLe30i-gPkKaB4As&ved=0ahUKEwicwZeapriPAxVt-gIHHRBTALwQ4dUDCBE&uact=5&oq=terms&gs_lp=Egxnd3Mtd2l6LXNlcnAiBXRlcm1zMgoQLhiABBhDGIoFMgoQLhiABBhDGIoFMgoQLhiABBhDGIoFMgoQLhiABBhDGIoFMhAQLhiABBixAxhDGNQCGIoFMgoQABiABBhDGIoFMgoQABiABBhDGIoFMhAQLhiABBixAxhDGNQCGIoFMgsQLhiABBixAxiDATIFEAAYgAQyGRAuGIAEGEMYigUYlwUY3AQY3gQY4ATYAQJI5xpQigZY4xlwBHgBkAEAmAG8AaABjgiqAQMwLje4AQPIAQD4AQGYAgugArwIwgIKEAAYsAMY1gQYR8ICDRAAGIAEGLADGEMYigXCAhMQLhiABBiwAxhDGMgDGIoF2AEBwgIKECMYgAQYJxiKBcICBBAjGCfCAgwQIxiABBgTGCcYigXCAhEQLhiABBixAxjRAxiDARjHAcICCxAAGIAEGLEDGIMBwgILEC4YgAQY0QMYxwHCAggQABiABBixA8ICCBAuGIAEGLEDwgILEC4YgAQYxwEYrwHCAg0QLhiABBjRAxjHARgKwgITEC4YgAQYsQMY0QMYgwEYxwEYCsICGRAuGIAEGEMYigUYlwUY3AQY3gQY3wTYAQLCAgcQABiABBgKwgINEC4YgAQYsQMYQxiKBZgDAIgGAZAGC7oGBAgBGAi6BgYIAhABGBSSBwM0LjegB4FesgcDMC43uAesCMIHBTAuMi45yAcq&sclient=gws-wiz-serp"}>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem onClick={() => window.open("https://www.google.com/maps/search/?api=1&query=athens+street+athens+greece+12243", "_blank")}>
          <RoomOutlinedIcon style={{marginRight:"10px"}}/> Athens street, Greece, 12222
        </ContactItem>
        <ContactItem onClick={() => window.open.href = "https://www.google.com/search?q=210210210&oq=210210210&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIKCAEQABiABBiiBDIKCAIQABiABBiiBDIKCAMQABiABBiiBDIKCAQQABiABBiiBNIBCDY3MzRqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8"}>
          <LocalPhoneOutlinedIcon style={{marginRight:"10px"}}/> +30 210 210210210
        </ContactItem>
        <ContactItem onClick={() => window.location.href = "mailto:contact@pharmacy.gr"}>
          <EmailOutlinedIcon style={{marginRight:"10px"}}/> contact@pharmacy.gr
        </ContactItem>
        <ContactItem>
          <h3>Payment Methods</h3>
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
