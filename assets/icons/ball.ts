type Props = {
  color?: string;
  size?: string;
};

export const BallIcon = ({ color = 'white', size = '14' }: Props) => `
<svg width=${size} height=${size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3979 6.86167C13.3252 5.63172 12.8888 4.47413 12.0888 3.46124L11.8706 3.24419L11.7979 3.09949L11.1433 2.44834L10.9979 2.376C10.9251 2.30365 10.7797 2.2313 10.707 2.15895C9.47058 1.21841 7.94329 0.784309 6.416 0.929007C5.25235 1.00136 4.16142 1.3631 3.28868 2.01425C2.34322 2.66539 1.61593 3.53359 1.10684 4.54648C0.597739 5.55937 0.379554 6.71696 0.525011 7.80221C0.597739 8.9598 0.96138 10.045 1.61593 10.9132C2.19776 11.7814 2.99777 12.5049 3.94324 13.0114C4.8887 13.5178 5.9069 13.7349 6.99782 13.7349C7.14328 13.7349 7.28874 13.7349 7.50692 13.7349C8.7433 13.6625 9.90695 13.2284 10.9251 12.4326L11.1433 12.2879L11.2888 12.2155L11.9433 11.5644L12.0161 11.4197L12.2343 11.1303C13.0343 9.90034 13.4706 8.381 13.3979 6.86167ZM4.37961 2.15895L3.36141 2.88245C3.28868 2.88245 3.28868 2.95479 3.21595 2.95479H3.14323L2.99777 3.02714C3.50687 2.59305 4.08869 2.2313 4.74325 1.9419L4.37961 2.15895ZM11.9433 5.19763C11.507 5.34232 11.0706 5.41468 10.6342 5.48702L10.1251 5.05293L9.39785 4.40178C9.32513 4.32943 9.2524 4.25708 9.17967 4.25708L8.96148 4.11238C8.88876 4.11238 8.88876 4.04004 8.88876 3.96769C8.7433 3.53359 8.67057 3.02714 8.59784 2.59305L8.52511 2.15895C8.81603 2.0866 9.17967 2.01425 9.47058 2.0866C9.54331 2.0866 9.68877 2.15895 9.76149 2.2313L9.83422 2.30365C10.416 2.6654 10.9251 3.02714 11.3615 3.53359C11.507 3.67829 11.5797 3.82299 11.7252 4.04004L11.8706 4.25708V4.32943L12.0888 5.19763H11.9433ZM8.16147 4.04004C7.79783 4.25708 7.43419 4.54648 7.07055 4.76353L6.34327 5.26997C6.34327 5.26997 6.34327 5.26997 6.27054 5.26997L4.52506 4.76353L3.94324 4.61883L3.87051 4.18473C3.87051 3.89533 3.79778 3.67829 3.72505 3.38889C3.72505 3.38889 3.72505 3.38889 3.72505 3.31654L4.96143 2.44834L5.97963 1.7972H6.05236C6.63418 1.86955 7.21601 1.9419 7.79783 2.15895C7.79783 2.15895 7.79783 2.15895 7.87056 2.2313C7.94329 2.8101 8.08875 3.46124 8.16147 4.04004ZM3.50687 5.48702L3.5796 5.34232C3.65232 5.19762 3.72505 5.19762 3.94324 5.26997C4.59779 5.48702 5.32507 5.63172 5.97963 5.84877L6.19781 5.92112C6.27054 5.92112 6.27054 5.92112 6.27054 5.99347L6.85237 7.94691V8.01926L6.05236 9.03215L5.17962 10.1174C5.17962 10.1174 5.17962 10.1174 5.10689 10.1174L3.21595 9.61094C3.14323 9.61094 3.14323 9.61094 3.14323 9.53859C2.92504 8.6704 2.63413 7.87455 2.41595 7.07871C2.41595 7.07871 2.34322 7.00636 2.34322 6.93401C2.34322 6.86166 2.34322 6.86166 2.41595 6.78931C2.70686 6.42756 2.92504 6.13817 3.21595 5.77642L3.43414 5.48702H3.50687ZM6.19781 12.5049H6.27054L6.99782 12.5773L8.88876 12.722H8.96148C8.96148 12.722 8.96148 12.722 9.03421 12.7943C7.79783 13.2284 6.416 13.3008 5.17962 12.939L6.19781 12.5049ZM9.03421 12.0708L6.34327 11.9261C6.19781 11.6367 6.05236 11.275 5.9069 10.9856L5.68871 10.4791V10.4068C5.83417 10.1897 6.05236 9.97269 6.19781 9.82799L7.28874 8.5257H7.36146L8.16147 8.59805L8.7433 8.6704H9.32513H9.39785L9.83422 9.53859C10.0524 9.90034 10.1979 10.2621 10.416 10.6238C10.416 10.6238 10.416 10.6238 10.416 10.6962V10.7685C9.97968 11.1303 9.54331 11.5644 9.03421 12.0708ZM10.7797 6.06582L12.2343 5.70407L12.3797 6.06582C12.5252 6.35522 12.6706 6.64462 12.7434 7.00636C12.7434 7.15106 12.7434 7.36811 12.7434 7.51281C12.7434 7.58516 12.7434 7.58516 12.7434 7.65751C12.6706 8.381 12.5252 9.17685 12.1615 9.82799V9.90034H12.0888L11.8706 9.97269L11.3615 10.1174C11.2161 10.1174 11.1433 10.1897 10.9979 10.1897L10.5615 9.32154L10.0524 8.381V8.30865C10.3433 7.58516 10.5615 6.86166 10.7797 6.06582ZM2.63413 9.75564C2.63413 9.82799 2.63413 9.82799 2.63413 9.90034L2.34322 10.7685L2.27049 10.9132C1.83412 10.3344 1.47048 9.61094 1.25229 8.88745C1.03411 8.16395 0.96138 7.36811 1.10684 6.57227L1.17956 6.64462C1.39775 6.78931 1.54321 6.86166 1.76139 7.00636C2.12503 7.94691 2.34322 8.88745 2.63413 9.75564Z" fill=${color}/>
</svg>

`;