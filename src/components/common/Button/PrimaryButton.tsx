import Link from "next/link";

const PrimaryButton = ({
    href = "/shop",
    text = "Explore products",
    bgcolor = "bg-primary",
}) => {
    return (
        <Link
            href={href}
            className={`${bgcolor} button-main inline-flex items-center gap-3 px-8 py-4  text-gray-900 border-2 border-gray-900 rounded-full hover:bg-gray-50 transition-all duration-300 font-medium text-lg shadow-md hover:shadow-lg group`}
        >
            <span>{text}</span>
            <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-300">
                <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                </svg>
            </div>
        </Link>
    );
};
export default PrimaryButton;
