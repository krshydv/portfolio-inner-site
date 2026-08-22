import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Achievements</h1>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Competitive Programming</h3>
                        <b>
                            <p>LeetCode</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Competitive programming on LeetCode, focused on Data
                    Structures & Algorithms and contest performance.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            LeetCode Guardian: Achieved a Peak Contest Rating
                            of 2217, ranking in the Top 0.83% of users
                            globally.
                        </p>
                    </li>
                    <li>
                        <p>
                            LeetCode Knight: Current Contest Rating of 2041,
                            ranking in the Top 2.06% of users globally.
                        </p>
                    </li>
                    <li>
                        <p>
                            Solved 350+ Data Structures & Algorithms problems
                            across LeetCode.
                        </p>
                    </li>
                    <li>
                        <p>
                            Top Global Ranks: 13th in Biweekly Contest 185,
                            52nd in Biweekly Contest 179, and 106th in Weekly
                            Contest 495.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Developing Generative AI Solutions</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://aws.amazon.com/'}
                        >
                            <h4>aws.amazon.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Amazon Web Services (AWS)</h3>
                        <b>
                            <p>Oct 2025</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Explored foundation models and enterprise generative AI
                    workflows.
                </p>
                <br />
                <p>
                    The material lined up with work I'd already been doing on
                    EarningsLens, where I fine-tuned a Longformer model on
                    earnings call transcripts. Fine-tuning a large pretrained
                    model is a fairly narrow slice of what "generative AI
                    solutions" covers, but it gave me a concrete place to
                    ground concepts like tokenization limits, transfer
                    learning, and where a foundation model's general
                    knowledge stops and task-specific fine-tuning has to take
                    over.
                </p>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Data & Analytics Vacationer Program</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://www.theforage.com/'}
                        >
                            <h4>theforage.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Deloitte via Forage</h3>
                        <b>
                            <p>Aug 2025</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Completed practical tasks in Data Analysis and Forensic
                    Technology as part of Deloitte's 2025/26 Data & Analytics
                    Vacationer Program.
                </p>
                <br />
                <p>
                    The data-analysis tasks were a useful complement to the
                    analytics work in my own projects — building the
                    event-study backtester for EarningsLens and the risk and
                    PnL dashboards for the RL hedging platform both come down
                    to the same core question: does this signal or metric
                    actually mean what you think it means once you interrogate
                    it, or does it fall apart under a closer look.
                </p>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Introduction to Python Programming</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://www.coursera.org/'}
                        >
                            <h4>coursera.org</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>University of Pennsylvania</h3>
                        <b>
                            <p>Aug 2025</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>Completed Python programming fundamentals.</p>
                <br />
                <p>
                    Python ended up being the common thread across most of my
                    other work — it's the language behind the RL hedging
                    platform's FastAPI backend and Stable-Baselines3 agents,
                    and behind EarningsLens' inference server and model
                    fine-tuning. Revisiting the fundamentals formally was less
                    about learning new syntax and more about tightening up
                    habits that get easy to skip once a project's moving
                    quickly.
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;
