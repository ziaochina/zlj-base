// {component: '##button', key:'save', title: '保存', onClick: 'save'}
export default function button({ title, onClick, key = title, component, ...ext }) {
    return {
        name: key,
        component: 'Button',
        className: 'zlj-btn-bluesky',
        children: title,
        onClick: onClick ? `{{$${onClick}(data)}}` : undefined,
        ...ext
    }
}