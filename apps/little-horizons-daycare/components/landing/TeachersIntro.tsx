import React from 'react'
import Image from 'next/image'


const teachers = [
    {
        name: "Lead Teacher: Sarah Johnson",
        bio: " 15 years of experience in early childhood education. Passionate about creative play and building confidence in children.",
        coverImage: "portrait-curly-haired-beautiful-woman-smiles-happily-wears-fashionable-purple-jacket-one-tone-with-background-feels-delighted-poses-glad-indoor-ta.jpg",
        color: {
            coverImage: "border-brand-purple",
            button: "bg-brand-purple hover:bg-brand-purple-shade shadow-brand-purple-shade"
        }
    },
    {
        name: "Assistant Teacher: Mike Nguyen",
        bio: "Specialist in infant care with a warm and nurturing approach to early development.",
        coverImage: "portrait of pleasant looking woman with curly hair being in good mood smiles satisfied wears casual turtleneck and earrings.jpg",
        color: {
            coverImage: "border-brand-purple",
            button: "bg-brand-purple hover:bg-brand-purple-shade shadow-brand-purple-shade"
        }
    },
    {
        name: "Art and Music Coordinator: Lisa Rivera",
        bio: "Believes in the power of creativity to inspire and engage young minds.",
        coverImage: "woman with beret and turtleneck sweater.jpg",
        color: {
            coverImage: "border-brand-purple",
            button: "bg-brand-purple hover:bg-brand-purple-shade shadow-brand-purple-shade"
        }
    },
]

export default function TeachersIntro() {
    return (
        <section className="wrapper new-section text-brand-black">
            <div className="u-container u-grid space-y-[var(--space-m)]">
                <div className="textbox max-w-3xl mx-auto space-y-4 text-center">
                    <h2 className="font-[family-name:var(--font-heading)] 
                    fs-3 capitalize text-center">
                        Meet our dedicated team
                    </h2>
                    <p className='mx-auto'>
                        At Little Horizons, our teachers and caregivers are the heart of
                        everything we do. Each team member is carefully selected for their
                        experience, qualifications, and passion for early childhood
                        development.
                    </p>
                </div>
                <div className="card-wrapper">
                    <div 
                    style={{
                        '--column-min-width': '320px',
                    }as React.CSSProperties}
                    className="card-container u-grid auto-grid">
                        {
                            teachers.map((teacher, index) => {
                                return (
                                    <div key={index} className="card text-brand-black">
                                        <div className="card-img h-48 w-full relative">
                                            <Image
                                                src={`/images/portraits/${teacher.coverImage}`}
                                                className={`rounded-lg border-4 object-cover 
                                                    ${teacher.color.coverImage}`}
                                                fill
                                                alt=''
                                            />
                                        </div>
                                        <div className="card-content pt-4">
                                            <div className="card-header w-3/4">
                                                <h3 className="card-title font-bold fs-0">
                                                    {teacher.name}
                                                </h3>
                                            </div>
                                            <div className="card-body w-3/4">
                                                <p className='fs--1 text-brand-black-75'>
                                                    {teacher.bio}
                                                </p>
                                            </div>
                                            <div className="card-footer">
                                                {/* <Link href={`#`}>
                                                <Button size={`sm`} 
                                                className={`shadow-md ${teacher.color.button}`}>
                                                    See program</Button>
                                            </Link> */}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>

            </div>
        </section>
    )
}
