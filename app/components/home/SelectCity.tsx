import { City } from '@/app/types/cityType'

interface SelectCityProps {
    cityObj: City
    selectedCityId: string | null
    handleCityClick: () => void
}

export default function SelectCity({
    cityObj,
    selectedCityId,
    handleCityClick,
}: SelectCityProps) {
    const { city, id } = cityObj

    return (
        <div
            className={`flex gap-4 items-center justify-between border-b border-border_color_grey py-3 default-hover-active cursor-pointer ${
                selectedCityId === id ? 'bg-highlight' : ''
            }`}
            onClick={handleCityClick}
        >
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center bg-grey border-border_color_grey rounded-[8px]">
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.99974 4.06661C6.5638 4.06661 5.39974 5.23067 5.39974 6.66661C5.39974 8.10255 6.5638 9.26661 7.99974 9.26661C9.43568 9.26661 10.5997 8.10255 10.5997 6.66661C10.5997 5.23067 9.43568 4.06661 7.99974 4.06661ZM6.59974 6.66661C6.59974 5.89341 7.22654 5.26661 7.99974 5.26661C8.77294 5.26661 9.39974 5.89341 9.39974 6.66661C9.39974 7.43981 8.77294 8.06661 7.99974 8.06661C7.22654 8.06661 6.59974 7.43981 6.59974 6.66661Z"
                            fill="white"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.99974 0.733276C5.05191 0.733276 2.06641 2.95383 2.06641 6.66661C2.06641 9.3462 3.96079 11.9133 6.0551 13.8332L6.08444 13.8601C6.3994 14.1489 6.68446 14.4103 6.95897 14.5925C7.26831 14.7978 7.59659 14.9264 7.99974 14.9264C8.40289 14.9264 8.73117 14.7978 9.04051 14.5925C9.31502 14.4103 9.60009 14.1489 9.91505 13.8601L9.94438 13.8332C12.0387 11.9133 13.9331 9.3462 13.9331 6.66661C13.9331 2.95383 10.9476 0.733276 7.99974 0.733276ZM3.26641 6.66661C3.26641 3.71272 5.61423 1.93328 7.99974 1.93328C10.3852 1.93328 12.7331 3.71272 12.7331 6.66661C12.7331 8.81783 11.1702 11.0815 9.13348 12.9486C8.77977 13.2729 8.56374 13.4686 8.3769 13.5926C8.2164 13.6992 8.11526 13.7264 7.99974 13.7264C7.88422 13.7264 7.78308 13.6992 7.62258 13.5926C7.43574 13.4686 7.21971 13.2729 6.86599 12.9486C4.82931 11.0815 3.26641 8.81783 3.26641 6.66661Z"
                            fill="white"
                        />
                    </svg>
                </div>
                <h2 className="text-sm">{city}</h2>
            </div>

            {selectedCityId === id && (
                <span>
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M21.636 6.36358C21.9875 6.71505 21.9875 7.2849 21.636 7.63637L11.0502 18.2222C11.0382 18.2341 11.0263 18.2461 11.0143 18.2581C10.7122 18.5603 10.4251 18.8474 10.158 19.0513C9.85947 19.279 9.48262 19.4858 8.99961 19.4858C8.5166 19.4858 8.13975 19.279 7.84125 19.0513C7.57408 18.8474 7.28706 18.5603 6.9849 18.2581C6.97295 18.2461 6.96099 18.2341 6.949 18.2222L2.36321 13.6364C2.01174 13.2849 2.01174 12.7151 2.36321 12.3636C2.71469 12.0121 3.28453 12.0121 3.63601 12.3636L8.22179 16.9494C8.57312 17.3007 8.77394 17.4988 8.9331 17.6202C8.96069 17.6413 8.98266 17.6566 8.99961 17.6675C9.01656 17.6566 9.03853 17.6413 9.06612 17.6202C9.22528 17.4988 9.4261 17.3007 9.77743 16.9494L20.3632 6.36358C20.7147 6.01211 21.2845 6.01211 21.636 6.36358Z"
                            fill="white"
                        />
                    </svg>
                </span>
            )}
        </div>
    )
}
