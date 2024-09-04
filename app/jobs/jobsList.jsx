import JobCard from './jobsCard';

function JobList({ onApplyClick }) {
    const jobDetails = [
        {
            date: '4 يناير 2024',
            title: 'هذا النص هو مثال لنص يمكن',
            description: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة. لقد تم توليد هذا النص من مولد النص العربي، حيث...',
            skills: ['اسم المجال', 'دوام جزئي', 'خبرة 5 سنوات'],
        },
        {
            date: '4 يناير 2024',
            title: 'هذا النص هو مثال لنص يمكن',
            description: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة. لقد تم توليد هذا النص من مولد النص العربي، حيث...',
            skills: ['اسم المجال', 'دوام جزئي', 'خبرة 5 سنوات'],
        },
    ];

    return (
        <div className="container m-auto">
            <div className="flex flex-wrap gap-4 justify-center">
                {jobDetails.map((job, index) => (
                    <JobCard
                        key={index}
                        date={job.date}
                        title={job.title}
                        description={job.description}
                        skills={job.skills}
                        onApplyClick={onApplyClick}
                    />
                ))}
            </div>
        </div>
    );
}

export default JobList;
