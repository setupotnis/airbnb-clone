"use client";
interface MenuItemProps {
  onClick: () => void;
  label: string;
}
const menuItem: React.FC<MenuItemProps> = ({ onClick, label }) => {
  return (
    <div
      onClick={onClick}
      className="
        py-3
        px-4
        hover:bg-neutral-100
        transition
        font-semibold
        "
    >
      {label}
    </div>
  );
};

export default menuItem;
