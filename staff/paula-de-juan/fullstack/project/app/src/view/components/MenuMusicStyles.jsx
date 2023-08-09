import { useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
//import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const musicStyles = [

    "Classical music",
    "Jazz",
    "Blues",
    "Rock n roll",
    "Rock and psicodelia",
    "Hard-rock",
    "Heavy-metal",
    "Grunge",
    "Rock indie and brit-pop",
    "Rock indie in spanish",
    "Punk",
    "Spanish flamenco",
    "Electronic dance music",
]



/*
   {
      name: 'Rock n roll from 1950',
     // avatar: 'https://lastfm.freetls.fastly.net/i/u/500x500/1137393529864e709930a116f94bce0e.jpg',
    },
    {
      name: 'Rock and psicodelia form 1960',
      // avatar: 'https://icrokando.files.wordpress.com/2014/05/beatles1.jpg',
    },
    {
      name: 'Hard-rock from 1970',
      // avatar: 'https://townsquare.media/site/366/files/2016/04/Top70.jpg?w=980&q=75',
    },
    {
      name: 'Heavy-metal from 1980',
      // avatar: 'https://i.ytimg.com/vi/HiiIf0Rp1A4/hqdefault.jpg',
    },
    {
      name: 'Grunge from 1990',
      // avatar: 'https://upload.wikimedia.org/wikipedia/en/5/54/Nirvana_mtv_unplugged_in_new_york.png',
    },
    {
      name: 'Rock indie and brit-pop from 1980 to 2000',
      // avatar: 'https://m.media-amazon.com/images/I/518JG1UkJFL._UF894,1000_QL80_.jpg',
    },
    {
      name: 'Rock indie in spanish from 2000 to 2020',
      // avatar: 'https://estaticos-cdn.prensaiberica.es/clip/6935dd41-087c-493f-8cc0-88ac8bb3c275_16-9-discover-aspect-ratio_default_1058121.jpg',
    },
    {
      name: 'Punk from 1970 to 2000',
      // avatar: 'https://media.istockphoto.com/id/1177479320/es/vector/conjunto-de-rock-punk-punks-no-palabras-muertas-y-elementos-de-dise%C3%B1o-ilustraci%C3%B3n-vectorial.jpg?s=612x612&w=0&k=20&c=c0Jx8UPoNa-35FDjsb8ywo8nZwvG75WJGlq7fH9dkAo=',
    },
    {
      name: 'Spanish flamenco',
      // avatar: https://lastfm.freetls.fastly.net/i/u/500x500/e28a21e42544b676a4a60dff81809a3d.jpg',
    },
    {
      name: 'Electronic dance music from 1980 to 2020',
      //avatar: 'https://musictech.com/wp-content/uploads/2019/10/tutorial-create-edm-free-header@1400x1050.jpg',
    },
  ]

*/


export default function MenuMusicStyles() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedPersons, setSelectedPersons] = useState([]);

    function isSelected(value) {
        return selectedPersons.find((el) => el === value) ? true : false;
    }

    function handleSelect(value) {
        if (!isSelected(value)) {
            const selectedPersonsUpdated = [
                ...selectedPersons,
                musicStyles.find((el) => el === value)
            ];
            setSelectedPersons(selectedPersonsUpdated);
        } else {
            handleDeselect(value);
        }
        setIsOpen(true);
    }

    function handleDeselect(value) {
        const selectedPersonsUpdated = selectedPersons.filter((el) => el !== value);
        setSelectedPersons(selectedPersonsUpdated);
        setIsOpen(true);
    }

    function handleSaveMusicStyles() {
        setIsOpen(false)
        setSelectedPersons([])
        console.log(selectedPersons)
    }

    return (
        <div className="flex items-center justify-center p-12">
            <div className="w-full max-w-xs mx-auto">
                <Listbox
                    as="div"
                    className="space-y-1"
                    value={selectedPersons}
                    onChange={(value) => handleSelect(value)}
                    open={isOpen}
                >
                    {() => (
                        <>
                            <Listbox.Label className="block text-sm leading-5 font-medium text-gray-700">
                                Favourite styles of music:
                            </Listbox.Label>
                            <div className="relative">
                                <span className="inline-block w-full rounded-md shadow-sm">
                                    <Listbox.Button
                                        className="cursor-default relative w-full rounded-md border border-gray-300 bg-white pl-3 pr-10 py-2 text-left focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                                        onClick={() => setIsOpen(!isOpen)}
                                        open={isOpen}
                                    >
                                        <span className="block truncate">
                                            {selectedPersons.length < 1
                                                ? "Select music styles"
                                                : `Selected music styles (${selectedPersons.length})`}
                                        </span>
                                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                            <svg
                                                className="h-5 w-5 text-gray-400"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </span>
                                    </Listbox.Button>
                                </span>

                                <Transition
                                    unmount={false}
                                    show={isOpen}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                    className="absolute mt-1 w-full rounded-md bg-white shadow-lg"
                                >
                                    <Listbox.Options
                                        static
                                        className="max-h-60 rounded-md py-1 text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5"
                                    >
                                        {musicStyles.map((style) => {
                                            const selected = isSelected(style);
                                            return (
                                                <Listbox.Option key={style} value={style}>
                                                    {({ active }) => (
                                                        <div
                                                            className={`${active
                                                                    ? "text-white bg-blue-600"
                                                                    : "text-gray-900"
                                                                } cursor-default select-none relative py-2 pl-8 pr-4`}
                                                        >
                                                            <span
                                                                className={`${selected ? "font-semibold" : "font-normal"
                                                                    } block truncate`}
                                                            >
                                                                {style}
                                                            </span>
                                                            {selected && (
                                                                <span
                                                                    className={`${active ? "text-white" : "text-blue-600"
                                                                        } absolute inset-y-0 left-0 flex items-center pl-1.5`}
                                                                >
                                                                    <svg
                                                                        className="h-5 w-5"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 20 20"
                                                                        fill="currentColor"
                                                                    >
                                                                        <path
                                                                            fillRule="evenodd"
                                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                                            clipRule="evenodd"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                            )}
                                                        </div>
                                                    )}
                                                </Listbox.Option>
                                            );
                                        })}
                                    </Listbox.Options>
                                </Transition>
                                <div className="pt-1 text-sm">
                                    {selectedPersons.length > 0 && (
                                        <>Selected persons: {selectedPersons.join(", ")}</>
                                    )}
                                </div>
                            </div>
                        </>
                    )}
                </Listbox>
            </div>  
        </div>
    );
}
