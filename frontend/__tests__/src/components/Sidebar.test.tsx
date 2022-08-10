import { fireEvent, render, screen } from "@testing-library/react";
import SideBar, { menuItems } from "../../../src/components/Sidebar";

const push = jest.fn();
let asPath = "/";
jest.mock("next/router", () => ({
  useRouter() {
    return {
      push,
      route: "/",
      pathname: "",
      query: "",
      asPath,
    };
  },
}));

// The test suite for the Sidebar component
//   1. renders a heading and a list of menu items which are links
//   2. renders a sidebars with no submenu items and links to the correct pages
//   3. checks if active sidebar is in different color
//   4. closes the open sidebar dropdown when clicking on a same sidebar
//   5. checks if the sidebar menus are there

describe("Sidebar", () => {
  const setOpenTab = jest.fn();
  it("renders a heading", async () => {
    asPath = "/";
    const setOpen = jest.fn();
    render(<SideBar openTab="" setOpenTab={setOpenTab} setOpen={setOpen} open={true} />);
    const heading = await screen.findByText("Ticketing");
    fireEvent.click(heading);
    expect(setOpen).toHaveBeenCalled();
    const TicketingItem = await screen.findByText("Daily");
    expect(TicketingItem).toBeInTheDocument();
    fireEvent.click(TicketingItem);
    expect(push).toHaveBeenCalledWith("/ticketing/daily");
    fireEvent.click(heading);
    expect(setOpen).toHaveBeenCalled();
    const profile = await screen.findByText("Profile");
    fireEvent.click(profile);
    expect(push).toHaveBeenCalledWith("/profile");
    expect(heading).toBeInTheDocument();
  });

  it("single sidebar active", async () => {
    asPath = "/profile";
    const setOpen = jest.fn();
    render(<SideBar openTab="" setOpenTab={setOpenTab} setOpen={setOpen} open={true} />);
    const heading = await screen.findByText("Profile");
    expect(heading).toHaveStyle("color: #019aff");
  });
  it("multi sidebar active", async () => {
    asPath = "/ticketing/daily";
    const setOpen = jest.fn();
    render(<SideBar openTab="" setOpenTab={setOpenTab} setOpen={setOpen} open={true} />);
    const heading = await screen.findByText("Ticketing");
    expect(heading).toHaveStyle("color: #019aff");
  });
  it("closes the open", async () => {
    asPath = "/";
    const setOpen = jest.fn();
    render(<SideBar openTab="Ticketing" setOpenTab={setOpenTab} setOpen={setOpen} open={true} />);
    const heading = await screen.findByText("Ticketing");
    fireEvent.click(heading);
    expect(setOpen).toHaveBeenCalled();
    expect(setOpenTab).toHaveBeenCalledWith("");
  });
  it("has a menuItems", async () => {
    expect(menuItems).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          title: expect.any(String),
          children: expect.any(Array),
          icon: expect.any(Object),
        }),
      ])
    );
  });
});
