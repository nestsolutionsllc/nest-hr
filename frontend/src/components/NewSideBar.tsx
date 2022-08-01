import React, { Dispatch, SetStateAction, useMemo } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import BackIcon from "../assets/svgs/BackIcon.svg";
import ChevronRight from "../assets/svgs/ChevronRight.svg";
import pinecone from "../assets/pinecone.png";

type NewSideBarType = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};
// This is the Structure of the NewSideBar
// You can add or remove any children you want and it will be reflected in the UI
const SideBarItems = {
  href: "/",
  title: "Home",
  children: [
    {
      href: "/tickets",
      title: "Tickets",
      children: [
        {
          href: "/tickets/new",
          title: "New",
          children: [
            {
              href: "/tickets/new/basic",
              title: "Basic",
              children: [],
            },
            {
              href: "/tickets/new/basic2",
              title: "Basic 2",
              children: [],
            },
            {
              href: "/tickets/new/basic3",
              title: "Basic 3",
              children: [],
            },
          ],
        },
        {
          href: "/tickets/all",
          title: "All",
          children: [],
        },
      ],
    },
    {
      href: "/table",
      title: "Table",
      children: [],
    },
  ],
};

const styles = {
  sideBarContainer: {
    width: "240px",
    height: "100vh",
    backgroundColor: "#FAFBFC",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    position: "fixed" as const,
    padding: "10px",
    paddingRight: "15px",
    transition: "all 0.3s ease-in-out",
    userSelect: "none" as const,
  },
  back: {
    marginTop: "20px",
  },
  backText: {
    marginLeft: "10px",
  },
  headerIcon: {
    height: "40px",
    width: "40px",
    borderRadius: "3px",
    overflow: "hidden",
    marginRight: "8px",
  },
  companyContainer: {
    display: "flex",
    alignItems: "center",
  },
  sideBarHeader: {
    borderBottom: "2px solid rgba(9, 30, 66, 0.08)",
    marginBottom: "20px",
    paddingBottom: "18px",
  },
  title: {
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "14px",
    lineHeight: "20px",
    color: "#42526E",
  },
  subTitle: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "12px",
    lineHeight: "20px",
    color: "#6B778C",
  },
  backIcon: {
    marginRight: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  sideBarChevron: {
    position: "absolute" as const,
    right: -12,
    background: "#FFFFFF",
    boxShadow: "0px 0px 1px rgba(9, 30, 66, 0.31), 0px 2px 4px rgba(9, 30, 66, 0.25)",
    height: "24px",
    width: "24px",
    borderRadius: "50%",
  },
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

const SideBarItem = ({ title, href }: { title: string; href: string }) => {
  const router = useRouter();
  return (
    <Link href={href}>
      <div className={`sideBarItem ${router.asPath === href ? "activeSideBarItem" : ""}`}>{title}</div>
    </Link>
  );
};

export const NewSideBar = ({ open, setOpen }: NewSideBarType) => {
  const router = useRouter();
  const tabs = useMemo(() => {
    let newTabs = SideBarItems;
    const routes = router.asPath.split("/").filter(item => item !== "");
    if (routes.length === 0) {
      return newTabs.children;
    }
    let acc = "";
    for (let i = 0; i < routes.length; i += 1) {
      const route = routes[i];
      acc = `${acc}/${route}`;
      // eslint-disable-next-line no-loop-func
      const tab = newTabs.children.find(item => item.href === acc);
      if (tab) {
        if (tab.children.length === 0) {
          return newTabs.children;
        }
        newTabs = tab;
      } else {
        return newTabs.children;
      }
    }
    return newTabs.children;
  }, [router.asPath]);

  const backpath = useMemo(() => {
    const routes = router.asPath.split("/").filter(item => item !== "");
    if (routes.length <= 1) {
      return "/";
    }
    let acc = "";
    for (let i = 0; i < routes.length - 1; i += 1) {
      const route = routes[i];
      acc = `${acc}/${route}`;
    }
    return acc;
  }, [router.asPath]);
  return (
    <div style={{ ...styles.sideBarContainer, marginLeft: open ? "0px" : "-225px" }}>
      <div style={styles.sideBarHeader}>
        <div style={styles.companyContainer}>
          <div style={styles.headerIcon}>
            <Image src={pinecone} />
          </div>
          <div>
            <div style={styles.title}>Pinecone</div>
            <div style={styles.subTitle}>HR system</div>
          </div>
          <div onClick={() => setOpen(!open)} style={styles.sideBarChevron}>
            <div style={{ ...styles.center, transform: `rotate(${open ? "180" : "0"}deg)` }}>
              <ChevronRight />
            </div>
          </div>
        </div>
        {router.route !== "/" && (
          <Link href={backpath}>
            <div style={styles.back} className="sideBarItem">
              <div style={styles.backIcon}>
                <BackIcon />
              </div>
              Back
            </div>
          </Link>
        )}
      </div>
      {tabs.map((item, index) => (
        <SideBarItem key={index} title={item.title} href={item.href} />
      ))}
    </div>
  );
};

export default NewSideBar;
