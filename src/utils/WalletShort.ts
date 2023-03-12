export const formatWallet = (wallet: string): string => {
    return wallet.slice(0, 10) +
    "..." +
    wallet.slice(
      wallet.length - 6,
      wallet.length
    )
}

export const formatWalletSmall = (wallet: string): string => {
    return wallet.slice(0, 4) +
    "..." +
    wallet.slice(
      wallet.length - 3,
      wallet.length
    )
}

export const formatWalletXSmall = (wallet: string): string => {
    return wallet.slice(0, 3) +
    "..." +
    wallet.slice(
      wallet.length - 2,
      wallet.length
    )
}