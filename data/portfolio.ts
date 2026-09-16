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
    "【制作期間：1ヶ月】Java 17・Spring Bootを使用して開発したタスク管理Webアプリケーションです。タスクの追加・一覧表示・編集・削除・完了／未完了の切り替えなど、基本的なCRUD機能を実装しました。Spring Data JPAとH2 Databaseを使用してデータを管理しています。Dockerでアプリケーションの実行環境を構築し、Renderを利用してWeb上に公開しています。公開したアプリはブラウザから実際に操作できます。",

  techStack: [
    "Java 17",
    "Spring Boot",
    "Thymeleaf",
    "Spring Data JPA",
    "H2 Database",
    "Git / GitHub",
    "Docker",
    "Render",
  ],

  url: "https://task-manager-7joz.onrender.com",
  githubUrl: "https://github.com/Ki-yoto/task-manager",
},
];

export const contact = {
  github: "https://github.com/Ki-yoto",
  email: "",
};
