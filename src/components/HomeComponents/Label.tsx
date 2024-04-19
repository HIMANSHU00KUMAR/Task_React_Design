import * as React from "react";

interface TabItemProps {
    label: string;
    isActive?: boolean;
}

const TabItem: React.FC<TabItemProps> = ({ label, isActive = false }) => {
    return (
        <div className={`${isActive ? "text-black grow" : "text-zinc-500"}`}>
            {label}
        </div>
    );
};

const tabItems = [
    { label: "All Posts(32)" },
    { label: "Article" },
    { label: "Event" },
    { label: "Education" },
    { label: "Job" },
];

export default function Label() {
    return (
        <div className="flex justify-between ">
            <nav className="flex gap-5 px-5 text-base">
                {tabItems.map((item, index) => (
                    <TabItem
                        key={item.label}
                        label={item.label}
                        isActive={index === 0}
                    />
                ))}
            </nav>
        </div>




    );
}