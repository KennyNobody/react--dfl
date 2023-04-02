interface TestProps {
    testValue: boolean
}

export const Test = ({testValue}: TestProps) => {
    return (
        <div>
            {testValue ? 'Да!!!' : 'НЕТ((('}
        </div>
    );
};
