import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import { mobails, tablet } from "../responsive";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobails} {
    width: 80vw;
  }
  ${tablet} {
    width: 80vw;
  }
`;
const Filter = styled.div`
  margin: 20px;
  ${mobails} {
    width: 0px 20px;
    display: flex;
    flex-direction: column;
  }
  ${tablet} {
    width: 0 30px;
    display: flex;
    flex-direction: column;
  }
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobails} {
    margin-right: 0px;
  }
  ${tablet} {
    margin-right: 0px;
  }
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobails} {
    margin-right: 10px 0px;
  }
`;
const Option = styled.option``;

const ProductListView: React.FC = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>PC PARTS</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>RGB</Option>
            <Option>Neutrals</Option>
            <Option>Pastel Colours</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Type
            </Option>
            <Option> PC Parts</Option>
            <Option>PC Cases</Option>
            <Option>PC Add-Ons</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products</FilterText>
          <Select>
            <Option selected> Type </Option>
            <Option> Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>

      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductListView;
