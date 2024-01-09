import { StatusCard } from "./StatusCard";

const options = [
  "accounts",
  "assets",
  "customers",
  "datapoints",
  "devices",
  "documents",
  "forms",
  "invites",
  "media",
  "messages",
  "namespaces",
  "orders",
  "patients",
  "relationships",
  "rules",
  "templates",
  "users",
  "workflows"
];

export const StatusCardList: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap'
    }}>
      {options.map((option) => (
        <StatusCard key={option} option={option} />
      ))}
    </div>
  )
}