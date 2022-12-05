// (function () {
    const UTC_START = 1970;
    const SHORT_MONTHS = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ];
    const TODAY = new Date();

    function pluralize(word, count) {
        return `${count} ${count < 2 ? `${word}` : `${word}s`}`;
    }

    const experience = [
        {
            title: 'Front End Engineer',
            company: '1stdibs',
            started: new Date('2018-07-01'),
        },
        {
            title: 'Front End Engineer',
            company: 'Swedbank',
            started: new Date('2016-04-01'),
            ended: new Date('2018-07-01'),
        },
    ];

    const experienceContent = experience
        .map(job => {
            const dateDiff = new Date(
                (!!job.ended ? job.ended.getTime() : TODAY.getTime()) -
                    job.started.getTime()
            );
            const started = `${
                SHORT_MONTHS[job.started.getMonth()]
            } ${job.started.getUTCFullYear()}`;
            const ended = `${
                !!job.ended
                    ? `${
                          SHORT_MONTHS[job.ended.getMonth()]
                      } ${job.ended.getUTCFullYear()}`
                    : `Present`
            }`;
            const wokedFor = `${pluralize(
                'year',
                dateDiff.getUTCFullYear() - UTC_START
            )} ${pluralize('month', dateDiff.getUTCMonth() + 1)}`;

            return `
        <div>
            <p class="text job--title">${job.title} at ${job.company}</p>
            <p class="text job--timeline">${started} - ${ended} | ${wokedFor}</p>
        </div>
    `;
        })
        .join('\n');

    document.getElementById('experience-container').innerHTML = experienceContent;
// })();