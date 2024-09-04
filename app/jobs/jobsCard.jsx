function JobCard({ date, title, description, skills, onApplyClick }) {
    return (
        <div className="lg:max-w-[49%] p-6 bg-white rounded-3xl shadow-lg border border-gray-200">
            <div className="flex justify-between items-center mb-4">
                <span className="text-gray-400 text-sm">{date}</span>
                <button
                    onClick={onApplyClick}
                    className="bg-[#6357A5] text-white py-2 px-4 rounded-full text-sm hover:bg-[#6254a1]">
                    قدم الان
                </button>
            </div>
            <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-500 mb-4">{description}</p>
            <div className="flex gap-2">
                {skills.map((skill, index) => (
                    <span key={index} className="bg-purple-100 text-[#6357A5] py-1 px-3 rounded-full text-sm">
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default JobCard;
