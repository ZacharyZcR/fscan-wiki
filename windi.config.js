import { defineConfig } from 'windicss/helpers'

export default defineConfig({
    darkMode: 'class', // 添加暗黑模式支持
    theme: {
        extend: {
            colors: {
                primary: '#3498db',
            }
        }
    },
    plugins: [
        require('windicss/plugin/typography'),
        require('windicss/plugin/forms'),
        require('windicss/plugin/aspect-ratio'),
    ]
})