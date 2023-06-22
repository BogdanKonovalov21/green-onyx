export default interface ContactUsFormProps {
    name: {
        name: string,
        setName: (value: string) => void;
    };
    mobile: {
        mobile: string,
        setMobile: (value: string) => void;
    }
    message: {
        message: string,
        setMessage: (value: string) => void;
    }
}
