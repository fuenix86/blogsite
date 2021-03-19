import styled from "@emotion/styled";

export const SidebarContainer = styled.div`
  display: flex;
  width: 20%;
  min-width: 118px;
  max-width: 280px;
  background: ${(p) => p.colors.sidebarBg};
  font-size: 2rem;

  flex-direction: column;
  justify-content: space-between;
`;

export const SidebarHeader = styled.h3`
  text-align: center;
  padding: 1rem 0;
`;

export const MenuItemContainer = styled.div`
  justify-content: space-between;
`;

export const MenuItem = styled.div`
  width: ${(p) => (p.selected ? "calc(100% - 1.6rem)" : "calc(100% - 1.6rem)")};
  padding: 0.8rem;
  padding-left: ${(p) => (p.selected ? "2.3rem" : "0.8rem")};
  color: ${(p) => (p.selected ? p.colors.menuItemColorSelected : p.colors.menuItemColor)};
  background: ${(p) => (p.selected ? p.colors.menuItemBgSelected : p.colors.menuItemBg)};
  font-family: ${(p) => (p.colors.font)};
  font-weight: 500;
  justify-content: space-between;
  border-radius: ${(p) => (p.selected ? "0px 10px 10px 0px" : "none")};
  transition: 0.2s ease all;

  ${(p) =>
    !p.selected &&
    `
    &:hover {
      color: ${p.colors.menuItemColorSelected};
      background: ${p.colors.menuItemBgHover};
    }
  `}
`;

export const MenuItemStatic = styled.div`
  width: calc(100% - 1.6rem);
  padding: 0.8rem;
  padding-left: 0.8rem;
  color: ${(p) => p.colors.menuItemColor};
  background: ${(p) => p.colors.menuItemBg};
  font-family: ${(p) => p.colors.font};
  font-weight: 500;
  justify-content: space-between;
`;

export const Text = styled.p`
  display: inline;
`;

export const Icon = styled.img`
  height: 1.5rem;
  padding-right: 0.2rem;
`;