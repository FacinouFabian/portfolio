import Layouts from '../core/layouts/'

const Contacts = () => (
  <Layouts.Application pageTitle="Contact me | Fabian Facinou">
    <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
            <div className="grid grid-cols-1 gap-16">
            <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                <h2 className="text-2xl leading-8 font-extrabold text-gray-900 sm:text-3xl sm:leading-9">
                Get in touch
                </h2>
                <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:col-gap-8 sm:row-gap-12 lg:mt-0 lg:col-span-2">
                <div>
                    <h4 className="text-lg leading-6 font-medium text-gray-900">
                    Collaborate
                    </h4>
                    <dl className="mt-2 text-base leading-6 text-gray-500">
                    <div>
                        <dt className="sr-only">
                        Email
                        </dt>
                        <dd>
                        support@example.com
                        </dd>
                    </div>
                    <div className="mt-1">
                        <dt className="sr-only">
                        Phone number
                        </dt>
                        <dd>
                        +1 (555) 123-4567
                        </dd>
                    </div>
                    </dl>
                </div>
                <div>
                    <h4 className="text-lg leading-6 font-medium text-gray-900">
                    Press
                    </h4>
                    <dl className="mt-2 text-base leading-6 text-gray-500">
                    <div>
                        <dt className="sr-only">
                        Email
                        </dt>
                        <dd>
                        support@example.com
                        </dd>
                    </div>
                    <div className="mt-1">
                        <dt className="sr-only">
                        Phone number
                        </dt>
                        <dd>
                        +1 (555) 123-4567
                        </dd>
                    </div>
                    </dl>
                </div>
                <div>
                    <h4 className="text-lg leading-6 font-medium text-gray-900">
                    Join our team
                    </h4>
                    <dl className="mt-2 text-base leading-6 text-gray-500">
                    <div>
                        <dt className="sr-only">
                        Email
                        </dt>
                        <dd>
                        support@example.com
                        </dd>
                    </div>
                    <div className="mt-1">
                        <dt className="sr-only">
                        Phone number
                        </dt>
                        <dd>
                        +1 (555) 123-4567
                        </dd>
                    </div>
                    </dl>
                </div>
                <div>
                    <h4 className="text-lg leading-6 font-medium text-gray-900">
                    Say hello
                    </h4>
                    <dl className="mt-2 text-base leading-6 text-gray-500">
                    <div>
                        <dt className="sr-only">
                        Email
                        </dt>
                        <dd>
                        support@example.com
                        </dd>
                    </div>
                    <div className="mt-1">
                        <dt className="sr-only">
                        Phone number
                        </dt>
                        <dd>
                        +1 (555) 123-4567
                        </dd>
                    </div>
                    </dl>
                </div>
                </div>
            </div>
            <div className="border-t-2 border-gray-100"></div>
                <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                    <h2 className="text-2xl leading-8 font-extrabold text-gray-900 sm:text-3xl sm:leading-9">
                    Locations
                    </h2>
                    <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:col-gap-8 sm:row-gap-12 lg:mt-0 lg:col-span-2">
                        <div>
                            <h4 className="text-lg leading-6 font-medium text-gray-900">
                            Los Angeles
                            </h4>
                            <div className="mt-2 text-base leading-6 text-gray-500">
                            <p>
                                4556 Brendan Ferry
                            </p>
                            <p className="mt-1">
                                Los Angeles, CA 90210
                            </p>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg leading-6 font-medium text-gray-900">
                        New York
                        </h4>
                        <div className="mt-2 text-base leading-6 text-gray-500">
                            <p>
                                886 Walter Streets
                            </p>
                            <p className="mt-1">
                                New York, NY 12345
                            </p>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg leading-6 font-medium text-gray-900">
                        Toronto
                        </h4>
                        <div className="mt-2 text-base leading-6 text-gray-500">
                            <p>
                                7363 Cynthia Pass
                            </p>
                            <p className="mt-1">
                                Toronto, ON N3Y 4H8
                            </p>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg leading-6 font-medium text-gray-900">
                        Chicago
                        </h4>
                        <div className="mt-2 text-base leading-6 text-gray-500">
                            <p>
                                726 Mavis Island
                            </p>
                            <p className="mt-1">
                                Chicago, IL 60601
                            </p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  </Layouts.Application>
)

export default Contacts
