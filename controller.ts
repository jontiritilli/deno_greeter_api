interface IGreeting {
    name: string
    timeOfDay: TimeOfDay
}

enum TimeOfDay {
    Morning = 'Good morning',
    Afternoon = 'Good afternoon',
    Evening = 'Good evening'
}

export const getGreeting = ({ params, response }: { params: { name: string }; response: any }) => {
    response.body = `${getTimeOfDay()} ${params.name}`
}

const getTimeOfDay = () => {
    const time = new Date().getHours() + 1
    if (time < 12) {
        return TimeOfDay.Morning
    } else if (time > 12 && time < 18) {
        return TimeOfDay.Afternoon
    } else {
        return TimeOfDay.Evening
    }
}