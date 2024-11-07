"use client";

import {
  getTheme,
  setTheme,
} from "@ui5/webcomponents-base/dist/config/Theme.js";
import navBackIcon from "@ui5/webcomponents-icons/dist/nav-back.js";
import paletteIcon from "@ui5/webcomponents-icons/dist/palette.js";
import {
  Avatar,
  Button,
  ButtonDomRef,
  Input,
  List,
  ListItemStandard,
  ListPropTypes,
  ResponsivePopover,
  ShellBar,
  ShellBarItem,
  ShellBarItemPropTypes,
} from "@ui5/webcomponents-react";
import ListMode from "@ui5/webcomponents/dist/types/ListSelectionMode.js";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useRef, useState } from "react";
import styles from "./AppShellBar.module.css";

const THEMES = [
  { key: "sap_horizon", value: "Morning Horizon (Light)" },
  { key: "sap_horizon_dark", value: "Evening Horizon (Dark)" },
  { key: "sap_horizon_hcb", value: "Horizon High Contrast Black" },
  { key: "sap_horizon_hcw", value: "Horizon High Contrast White" },
];

const PAGES = [
  { key: "/", title: "Home" },
  { key: "/items", title: "Items" },
  { key: "/overview", title: "Overview" },
  // Add more pages as needed
];

export function AppShellBar() {
  const router = useRouter();
  const pathname = usePathname();
  const popoverOpenerRef = useRef<ButtonDomRef | undefined>(undefined);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(getTheme);

  // Get current page title
  const getCurrentPageTitle = () => {
    const currentPage = PAGES.find((page) => page.key === pathname);
    return currentPage?.title || "Home";
  };

  const handleThemeSwitchItemClick: ShellBarItemPropTypes["onClick"] = (e) => {
    popoverOpenerRef.current = e.detail.targetRef as ButtonDomRef;
    setPopoverOpen(true);
  };

  const handleThemeSwitch: ListPropTypes["onSelectionChange"] = (e) => {
    const { targetItem } = e.detail;
    void setTheme(targetItem.dataset.key!);
    setCurrentTheme(targetItem.dataset.key!);
  };

  const handleMenuItemClick = (e: any) => {
    const key = e.detail.item.dataset.key;
    const page = PAGES.find((p) => p.key === key);
    if (page) {
      router.push(page.key);
    }
  };

  return (
    <>
      <ShellBar
        className={styles.shellBar}
        logo={
          <Image
            width={70}
            height={30}
            alt="SAP Logo"
            src="/assets/sap-logo.svg"
            className={styles.logo}
          />
        }
        menuItems={
          <>
            {PAGES.map((page) => (
              <ListItemStandard
                key={page.key}
                data-key={page.key}
                selected={pathname === page.key}
                className={`${styles.menuItem} ${
                  pathname === page.key ? styles.menuItemSelected : ""
                }`}
              >
                {page.title}
              </ListItemStandard>
            ))}
          </>
        }
        startButton={
          pathname !== "/" && (
            <Button
              icon={navBackIcon}
              onClick={() => router.back()}
              className={styles.backButton}
            />
          )
        }
        onLogoClick={() => router.push("/")}
        onMenuItemClick={handleMenuItemClick}
        primaryTitle={getCurrentPageTitle()}
        profile={
          <Avatar>
            <Image
              src="https://sap.github.io/ui5-webcomponents-react/v2/assets/Person-B7wHqdJw.png"
              alt="Avatar"
              width={32}
              height={32}
            />
          </Avatar>
        }
        searchField={
          <Input
            showClearIcon
            placeholder="Search ... "
            className={styles.searchInput}
          />
        }
        showNotifications
        notificationsCount="10"
        showSearchField
      >
        <ShellBarItem
          icon={paletteIcon}
          text="Change Theme"
          onClick={handleThemeSwitchItemClick}
        />
      </ShellBar>

      <ResponsivePopover
        className={styles.popover}
        open={popoverOpen}
        opener={popoverOpenerRef.current}
        onClose={() => setPopoverOpen(false)}
      >
        <List
          onSelectionChange={handleThemeSwitch}
          headerText="Change Theme"
          selectionMode={ListMode.Single}
        >
          {THEMES.map((theme) => (
            <ListItemStandard
              key={theme.key}
              selected={currentTheme === theme.key}
              data-key={theme.key}
              className={styles.menuItem}
            >
              {theme.value}
            </ListItemStandard>
          ))}
        </List>
      </ResponsivePopover>
    </>
  );
}
