export async function get({params, request}) {
    const response = await fetch("https://github.com/dodalovic/cv-design/raw/master/cv-dusan-odalovic.pdf");
    const buffer = Buffer.from(await response.arrayBuffer());
    return {
        body: buffer,
        encoding: 'binary',
    };
}