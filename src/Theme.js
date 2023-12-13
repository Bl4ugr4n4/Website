import { Switch } from 'antd';
import React, { useEffect, useState } from 'react'

const Theme = () => {
  const [dark, setDark] = useState();

  const DarkMode = () => {
    setDark(true)
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }
  const LightMode = () => {
    setDark(false)
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  };

  useEffect(() => {
    // DarkMode();
    let theme = localStorage.getItem("theme");
    if (theme === "dark") {
      console.log("dark")
      setDark(true);
      setTimeout(() => {
        DarkMode()
      }, 100);
    }
    else if (theme === "light") {
      console.log("light")
      setDark(false);
      setTimeout(() => {
        LightMode()
      }, 100);
    }

    return () => {

    }
  }, []);



  const toggleTheme = (val) => {
    setDark(val);
    if (val) {
      DarkMode();
    } else {
      LightMode();
    }
  }

  return (
    <div>
      <Switch checked={dark} onChange={(val) => toggleTheme(val)} />
    </div>
  )
}

export default Theme;
