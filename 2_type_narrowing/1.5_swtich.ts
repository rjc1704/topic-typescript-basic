type Theme = "light" | "dark" | "auto";

function applyTheme(theme: Theme) {
  switch (theme) {
    case "light":
      // theme은 "light" 타입으로 좁혀짐
      console.log("밝은 테마 적용");
      break;

    case "dark":
      // theme은 "dark" 타입으로 좁혀짐
      console.log("어두운 테마 적용");
      break;

    case "auto":
      // theme은 "auto" 타입으로 좁혀짐
      console.log("자동 테마 적용");
      break;

    default:
      const exhaustiveCheck: never = theme;
      throw new Error(`지원하지 않는 테마: ${exhaustiveCheck}`);
  }
}

// 테스트
applyTheme("light");
applyTheme("dark");
applyTheme("auto");