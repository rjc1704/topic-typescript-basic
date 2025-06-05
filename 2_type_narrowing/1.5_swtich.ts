// switch 문
type UserRole = "admin" | "user" | "guest";

type User = {
  name: string;
  role: UserRole;
  adminLevel?: number;
  premium?: boolean;
};

function handleUserByRole(user: User) {
  switch (user.role) {
    case "admin":
      // TypeScript가 user.role이 'admin'임을 알고 있음
      console.log(`Admin user: ${user.name}`);
      if (user.adminLevel) {
        // adminLevel이 있을 수도 있다고 타입 추론
        console.log(`Admin level: ${user.adminLevel}`);
      }
      break;

    case "user":
      // TypeScript가 user.role이 'user'임을 알고 있음
      console.log(`Regular user: ${user.name}`);
      if (user.premium) {
        console.log("Premium user benefits available");
      }
      break;

    case "guest":
      // TypeScript가 user.role이 'guest'임을 알고 있음
      console.log(`Guest user: ${user.name}`);
      console.log("Limited access");
      break;

    default:
      // 모든 케이스를 다뤘으므로 여기는 never 타입
      const exhaustiveCheck: never = user.role;
      throw new Error(`Unhandled role: ${exhaustiveCheck}`);
  }
}

handleUserByRole({ name: "John", role: "admin", adminLevel: 1 });
