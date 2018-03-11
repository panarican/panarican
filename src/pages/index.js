import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
    <div>
        <h2>Experiences</h2>
        <section>
            <h3>Founder</h3>
            <h4>Panarican LLC</h4>
            <p><em>Feb 2016 to Present</em></p>
            <p>I provide quality website development solutions to my clients. I specialize and provide services in
                front-end and back-end development.</p>
        </section>
        <section>
            <h3>Lead Drupal Architect</h3>
            <h4>Lightmaker</h4>
            <p><em>Jun 2015 to Aug 2017</em></p>
            <ul>
                <li>Developed and implemented custom modules in PHP/Drupal according to requirements</li>
                <li>Participated in meetings and regular planning and review sessions</li>
                <li>Interacted with cross-functional teams to ensure complete delivery of web applications</li>
                <li>Provided documentation as required and participated in code reviews, planning sessions and routine
                    status stand-ups
                </li>
                <li>Provided accurate level of e ort time estimates and provide recommendations for feature
                    prioritization Assisted in release/deployment planning and execution activities.
                </li>
                <li>Assisted with code reviews and helping developers on the team fix bugs</li>
            </ul>
            <p>Worked on the following projects:</p>
            <ul>
                <li>http://www.nhra.com (Drupal 8 - Hosted on Acquia)</li>
                <li>
                    <ul>
                        <li>Site consisted of content migration from an old asp.net site. I created a custom migration
                            plugin that referenced an xml dump to migrate old articles and events.
                        </li>
                        <li>I worked with NHRA's internal development team on integrating a custom Azure based web API.
                            Which is used to populate data for their standings and events/live events.
                        </li>
                        <li>I've integrated with their Brightcove video platform where they managed all video uploads.
                        </li>
                    </ul>
                </li>
                <li>https://www.haasf1team.com (Drupal 7 - Hosted on Acquia)</li>
                <li>
                    <ul>
                        <li>Implemented youtube as a solution for their Videos</li>
                        <li>Implemented a custom slider that supports html5 video loops as well as images)</li>
                    </ul>
                </li>
                <li>http://www.arnoldpalmer.com (Drupal 7 Multisite - Hosted on Acquia)</li>
                <li>http://www.arniesarmy.org (Drupal 7 Multisite - Hosted on Acquia)</li>
                <li>
                    <ul>
                        <li>Client required a multisite setup</li>
                        <li>Client wanted an easy visual UI for managing components so I implemented a custom Drupal
                            Distribution called Panopoly.
                        </li>
                    </ul>
                </li>
                <li>http://www.chopra.com (Drupal 7 - Hosted on AWS)</li>
                <li>
                    <ul>
                        <li>Site consisted of content migration from an older Drupal database.</li>
                        <li>I needed to integrate a custom SSO solution for cross site authentication.</li>
                        <li>Integrated Salesforce CRM for all contact forms.</li>
                    </ul>
                </li>
                <li>http://www.plasticsindustry.org (Drupal 7 Multisite - Acquia)</li>
                <li>
                    <ul>
                        <li>Client required a multisite setup</li>
                        <li>I created an elaborate theme settings page for any new multisite so the client so the site
                            appearance is customizable sharing a similar codebase.
                        </li>
                    </ul>
                </li>
                <li>http://www.shopfloorexpo.org (Drupal 7 Multisite - Acquia)</li>
                <li>http://www.refocussummit.org (Drupal 7 Multisite - Acquia)</li>
                <li>http://www.npe.org (Drupal 7 Multisite - Acquia)</li>
            </ul>
        </section>
    </div>
)

export default IndexPage
