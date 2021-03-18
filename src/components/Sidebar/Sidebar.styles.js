import styled from "@emotion/styled";

export const SidebarContainer = styled.div`
  width: 20%;
  min-width: 80px;
  max-width: 280px;
  color: white;
  background: #545454;
  font-size: 2rem;
`;

export const SidebarHeader = styled.h3`
  text-align: center;
  padding: 1rem 0;
`;

export const MenuItemContainer = styled.div`
  flex-direction: column;
`;

export const MenuItem = styled.div`
  width: ${(p) => (p.selected ? "calc(100% - 1.6rem)" : "calc(100% - 1.6rem)")};
  padding: 0.8rem;
  padding-left: ${(p) => (p.selected ? "2.3rem" : "0.8rem")};
  color: ${(p) => (p.selected ? "#ffffff" : "#cacaca")};
  background: ${(p) => (p.selected ? "#848484" : "#6b6b6b")};
  font-family: ${(p) => p.font};
  font-weight: 500;
  justify-content: space-between;
  border-radius: ${(p) => (p.selected ? "0px 10px 10px 0px" : "none")};
  transition: 0.2s ease all;

  ${(p) =>
    !p.selected &&
    `
    &:hover {
      color: #ffffff;
      background: #787878;
    }
  `}
`;

export const Text = styled.p`
  display: inline;
`;

export const Icon = styled.img`
  height: 1.5rem;
`;