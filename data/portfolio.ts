// ポートフォリオ情報

export const profile = {
  name: "志良堂 清俊",
  role: "Javaエンジニア",
  bio: "SES企業にてITエンジニアとして勤務しています。現在は車載システムの評価・検証業務に携わりながら、Java・Spring Bootを中心にWebアプリケーション開発を学習しています。今後はJavaを使用した開発業務へのステップアップを目指しています。",
  avatarUrl: "/images/avatar.jpeg",
};

export const skills = [
  { name: "Java", level: "学習中" },
  { name: "Spring Boot", level: "学習中" },
  { name: "Git / GitHub", level: "実務・学習" },
  { name: "JSON", level: "実務経験あり" },
  { name: "Android Studio", level: "実務経験あり" },
  { name: "Photoshop", level: "実務経験あり" },
  { name: "Next.js", level: "学習中" },
  { name: "TypeScript", level: "学習中" },
];

export const projects = [
  {
    title: "タスク管理アプリ",
    description:
      "Java・Spring Bootを使用して開発したタスク管理Webアプリケーションです。タスクの追加・編集・削除・完了状態の切り替え機能を実装しています。",
    techStack: [
      "Java 17",
      "Spring Boot",
      "Thymeleaf",
      "Spring Data JPA",
      "H2 Database",
    ],
    url: "https://github.com/Ki-yoto/task-manager",
  },
];

export const contact = {
  github: "https://github.com/Ki-yoto",
  email: "",
};
