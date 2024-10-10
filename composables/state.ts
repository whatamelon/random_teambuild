export const usePlayerList = () => useState('playerList', () => [])
export const useLeaderList = () => useState('leaderList', () => [])
export const useTeamCount = () => useState('teamCount', () => null)
export const useFixedTeam = () => useState('fixedTeam', () => [])

export const useExPlayerList = () => useState('exPlayerList', () => [])
export const useExLeaderList = () => useState('exLeaderList', () => [])
export const useExTeamCount = () => useState('exTeamCount', () => null)
export const useExFixedTeam = () => useState('exFixedTeam', () => [])
