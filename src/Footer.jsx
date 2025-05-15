function Footer() {
    const year = new Date();

    return (
        <footer>
            <p>&copy;{year.getFullYear} tientv</p>
        </footer>
    );
}

export default Footer;
