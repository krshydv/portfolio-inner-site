import React from 'react';
import meNow from '../../assets/pictures/currentme.jpg';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            {/* <img src={me} style={styles.topImage} alt="" /> */}
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm Krish Yadav</h3>
            <br />
            <div className="text-block">
                <p>
                    I'm a Software Engineer and Computer Science Engineering
                    student at Graphic Era (Deemed to be) University, building
                    intelligent systems and real-world software.
                </p>
                <br />
                <p>
                    Thank you for taking the time to check out my portfolio. I
                    really hope you enjoy exploring it as much as I enjoyed
                    building it. If you have any questions or comments, feel
                    free to contact me using{' '}
                    <Link to="/contact">this form</Link> or shoot me an email at{' '}
                    <a href="mailto:krishyadav8545@gmail.com">
                        krishyadav8545@gmail.com
                    </a>
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <h3>About Me</h3>
                <br />
                <div className="captioned-image">
                    <img src={meNow} style={styles.aboutImage} alt="" />
                </div>
                <br />
                <p>
                    I'm currently pursuing my Bachelor of Technology in
                    Computer Science Engineering at Graphic Era (Deemed to be)
                    University in Dehradun, Uttarakhand. Somewhere in the
                    first couple years of my degree, I noticed the projects I
                    got the most out of weren't the ones with the flashiest
                    features — they were the ones where something had to
                    actually hold together under real conditions: a job queue
                    that couldn't drop a task, a model that had to be right
                    more often than it was wrong, a training loop that had to
                    keep running unattended for hours. That's the thread that
                    runs through most of what I build.
                </p>
                <br />

                <p>
                    That thread is easiest to see if you follow my projects in
                    order. I started with{' '}
                    <Link to="/projects/software">QueueX</Link>, a distributed
                    task orchestration system — the kind of project that
                    forces you to think in terms of failure states and
                    retries instead of just the happy path. From there I moved
                    into EarningsLens, fine-tuning a Longformer model on
                    earnings call transcripts and building out the
                    infrastructure to actually validate whether the
                    sentiment signal meant anything against real price
                    data. Most recently that led me to my most ambitious
                    project yet, a reinforcement-learning derivative hedging
                    platform — combining RL-based agents, classical
                    quant-finance models, and a full production stack of
                    real-time telemetry, dashboards, and orchestration behind
                    it. Each project pushed me to take on a bit more scope
                    than the last. A few of these are viewable on my{' '}
                    <Link to="/projects/software">Software Projects</Link> page.
                </p>
                <br />
                <p>
                    Outside of project work, I spend a fair amount of time
                    working through problems on LeetCode. There's a
                    particular satisfaction in taking something messy and
                    reducing it to a solution that's precise, testable, and
                    a little elegant — it's a small, self-contained version
                    of the same instinct that shows up in the bigger
                    projects. You can find more on my rating and contest
                    history on the{' '}
                    <Link to="/experience">Achievements</Link> page.
                </p>
                <br />
                <p>
                    Mostly, I learn by building. I'll follow an idea — a
                    hedging strategy, a sentiment signal, a job queue — far
                    enough that it turns into something I can actually
                    inspect, break, and put back together, and that's usually
                    where the real understanding shows up. It's also why I
                    end up moving around between systems, data, and
                    infrastructure rather than staying in one lane; the
                    underlying question is always some version of "what is
                    this actually doing under the hood."
                </p>
                <br />
                <div className="text-block">
                    <h3>Education</h3>
                    <br />
                    <p>
                        <b>
                            <a
                                rel="noreferrer"
                                target="_blank"
                                href="https://geu.ac.in"
                            >
                                Graphic Era (Deemed to be) University
                            </a>
                        </b>
                        <br />
                        <sub>
                            B.Tech, Computer Science Engineering — Aug 2023 –
                            May 2027
                        </sub>
                    </p>
                    <br />
                    <p>
                        <b>Mount Litera Zee School</b>
                        <br />
                        <sub>Senior Secondary</sub>
                    </p>
                    <br />
                    <p>
                        <b>Army Public School (APS)</b>
                        <br />
                        <sub>Secondary</sub>
                    </p>
                </div>
                <br />
                <br />
                <div className="text-block">
                    <h3>Creative Lab</h3>
                    <br />
                    <p>
                        Beyond my core software work, I like using this
                        corner of the portfolio as a small creative-coding
                        lab — experimenting with{' '}
                        <Link to="/projects/music">
                            generative audio
                        </Link>{' '}
                        and{' '}
                        <Link to="/projects/art">
                            procedural visuals
                        </Link>
                        . It's the same systems-thinking mindset applied
                        somewhere with no wrong answer, which is a nice
                        break from strict correctness. You can read more
                        about each of these on their respective pages
                        under my projects tab.
                    </p>
                </div>
                <br />
                <br />
                <p>
                    Thanks for reading about me! I hope that you enjoy
                    exploring the rest of my portfolio website and everything
                    it has to offer. If you find the easter egg make sure to
                    let me know through the{' '}
                    <Link to="/contact">contact page</Link>. Good luck and
                    have fun!
                </p>
                <br />
                <p>
                    If you have any questions or comments I would love to hear
                    them. You can reach me through the{' '}
                    <Link to="/contact">contact page</Link> or shoot me an email
                    at{' '}
                    <a href="mailto:krishyadav8545@gmail.com">
                        krishyadav8545@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '100%',
    },
    aboutImage: {
        height: 'auto',
        width: '40%',
        maxWidth: 280,
        display: 'block',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        // width: '80%',
        marginLeft: 32,
        flex: 0.8,

        alignItems: 'center',
        // marginBottom: 32,
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default About;
