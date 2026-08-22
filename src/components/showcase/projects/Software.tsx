import React from 'react';
import ResumeDownload from '../ResumeDownload';
import rlHedgingImage from '../../../assets/pictures/projects/software/rl-hedging.png';
import earningsLensImage from '../../../assets/pictures/projects/software/earningslens.png';
import queueXImage from '../../../assets/pictures/projects/software/queuex.png';

export interface SoftwareProjectsProps {}

const SoftwareProjects: React.FC<SoftwareProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Software</h1>
            <h3>Projects</h3>
            <br />
            <p>
                Below are some of my favorite software projects I have worked on
                over the last few years.
            </p>
            <br />
            <ResumeDownload />
            <br />
            <div className="text-block">
                <h2>RL Derivative Hedging Platform</h2>
                <br />
                <p>
                    An enterprise-grade quantitative finance platform that
                    integrates reinforcement learning agents for derivative
                    pricing and hedging, using Black-Scholes, Monte Carlo, and
                    Heston stochastic volatility models. Built between January
                    and May 2026.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={rlHedgingImage} alt="" />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 1:</b> The Trading Command Center
                            dashboard — live PnL, portfolio health, risk
                            score, and Greeks exposure telemetry.
                        </sub>
                    </p>
                </div>
                <p>
                    The backend is built with FastAPI, featuring real-time
                    WebSocket telemetry, Redis pub/sub, PostgreSQL, Celery
                    workers, and MLflow experiment tracking for asynchronous
                    RL training pipelines. It's deployed with Docker Compose
                    and Kubernetes, with Prometheus, Grafana, and NGINX
                    integrated for monitoring, and a multi-page Next.js
                    dashboard for live portfolio and risk analytics.
                </p>
                <br />
                <p>
                    The continuous-action hedging agents are implemented with
                    Stable-Baselines3, including Greeks computation, PnL
                    analytics, drawdown analysis, and a backtesting engine for
                    strategy workflows.
                </p>
                <br />
                <h3>Stack:</h3>
                <p>
                    Python, FastAPI, PyTorch, Stable-Baselines3, Next.js,
                    Docker, Kubernetes, Redis, PostgreSQL
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/krshydv/Reinforcement-Learning-Derivative-Hedging.git"
                        >
                            <p>
                                <b>[GitHub]</b> - RL Derivative Hedging
                                Platform Repository
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>EarningsLens</h2>
                <br />
                <p>
                    EarningsLens is an earnings call sentiment analyzer built
                    between September and November 2025. I fine-tuned{' '}
                    <code>allenai/longformer-base-4096</code> on earnings call
                    transcripts for 3-class sentiment classification, with key
                    phrase extraction via attention visualization.
                </p>
                <br />
                <p>
                    The project includes a FastAPI inference server with an
                    event-study backtester that correlates sentiment scores
                    against post-earnings price movements using{' '}
                    <code>yfinance</code>, alongside a React 18 + TypeScript
                    dashboard built with Recharts for sentiment visualization
                    and Zustand for state management.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={earningsLensImage} alt="" />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 2:</b> The event-study backtest view —
                            cumulative P&L and average return by sentiment
                            class across historical earnings events.
                        </sub>
                    </p>
                </div>
                <p>
                    The model achieved a weighted average F1 score of 0.41 on
                    600 transcripts, improving Positive class recall to 0.59.
                </p>
                <br />
                <h3>Stack:</h3>
                <p>
                    Python, FastAPI, HuggingFace Transformers, PyTorch, React
                    18, TypeScript, Docker Compose
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/krshydv/EARNINGS-SENTIMENT-ANALYZER.git"
                        >
                            <p>
                                <b>[GitHub]</b> - EarningsLens Repository
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>QueueX</h2>
                <br />
                <p>
                    QueueX is a distributed task orchestration system built
                    between March and June 2025. It's a distributed task
                    execution platform processing 10,000+ asynchronous jobs
                    using Redis and BullMQ, with retries and lifecycle
                    tracking across five job states, achieving 99%+
                    reliability.
                </p>
                <br />
                <p>
                    Secure REST APIs are built with Express.js, PostgreSQL,
                    Prisma ORM, JWT authentication, and Docker.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={queueXImage} alt="" />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 3:</b> The job-submission panel — job
                            types and dispatch flow for distributed workers.
                        </sub>
                    </p>
                </div>
                <h3>Stack:</h3>
                <p>
                    Node.js, TypeScript, Express.js, PostgreSQL, Prisma ORM,
                    Redis, BullMQ, Docker
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/krshydv/QueueX-Distributed-Task-Orchestration-System.git"
                        >
                            <p>
                                <b>[GitHub]</b> - QueueX Repository
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <ResumeDownload />
        </div>
    );
};

const styles: StyleSheetCSS = {
    caption: {
        width: '80%',
    },
};

export default SoftwareProjects;
